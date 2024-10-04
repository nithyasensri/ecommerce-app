import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';
import { CartContextcart } from '../context/CartContextcart';


import { Row, Col, Button } from 'reactstrap'
import { useState } from 'react';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate()
    const { state,dispatch } = useContext(ProductContext)
    const { singleProduct } = state

    const {cartstate,cartdispatch} = useContext(CartContextcart)
    const {cart} =cartstate
    console.log(cart)
  
    

    const [index, setIndex] = useState(0)

    const AddCart = (data) => {
        console.log(data)
        cartdispatch({ type: "AddCart", payload: data })
    }

    const Remove = (id) => {
        console.log(id)
        cartdispatch({ type: "Remove", payload: id })
    }

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://dummyjson.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        // console.log(response.data)
        dispatch({ type: "Selected-Product", payload: (response.data) });
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
    }, [productId]);

    const backHome = () => {
        dispatch({ type: "Remove-Selectedproducts" });
        navigate("/")
    }
    return (
        <Col sm={{ offset: 1, size: 10 }} className="pt-5">
            <Button color="primary" onClick={backHome} className="mt-3 mb-3">
                Back to Home
            </Button>
            {singleProduct.map((data) => {
                return (<Row>

                    <Col xs="5" >
                        <Row style={{ "border": "solid 2px #ccc", "margin": "5px" }}>
                            <Col xs="12" className='productdiv-left'>
                                <img src={data.images[index]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" >
                                {data.images.map((data, i) => {
                                    return (<Col xs="3" className='small-image'>
                                        <img src={data} className={i === index ? 'selected-image' : 'small-image'}
                                            style={{ "padding": "10px" }} onMouseEnter={() => setIndex(i)} />
                                    </Col>)
                                })}
                            </Col>
                        </Row>
                    </Col>



                    <Col xs="7" className='productdiv-right'>
                        {/* {data.images.map((data, i) => {
                            return (<Col xs="3">
                                <img src={data} className={i === index ? 'small-img selected-image' : 'small-img'} />
                            </Col>)
                        })} */}
                        <h3>{data.title}</h3>
                        <h4>{data.price}</h4>
                        <p>{data.description}</p>
                        <p>ratings:{data.rating}</p>

                        {cart.some(cart => cart.id == data.id) ?
                        (<div class="col text-center">
                            {console.log('ac')}
                            <Button onClick={() => Remove(data.id)}>
                                RemoveCart
                            </Button>
                        </div>)
                        : (<div class="col text-center">
                            {console.log('dc')}
                            <Button onClick={()=>AddCart(data)} style={{
                                'paddingLeft': '70px', 'paddingRight': '70px',
                                'background': 'rgb(2, 137, 204)'
                            }}>
                                Add Cart
                            </Button>
                        </div>)}
                    </Col>
                </Row>)
            })}
        </Col>
    );
};

export default ProductDetail;