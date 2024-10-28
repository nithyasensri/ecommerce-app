import React from 'react';
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { CartContext } from '../context/CartContext';
import { CartContextcart } from '../context/CartContextcart';
import { useContext, useState } from 'react';
import ProductDetail from '../pages/ProductDetail';
import { Link } from 'react-router-dom'
const ProductCard = ({ product }) => {
    // console.log(product.rating)
    const { id, title, price, description, images, rating, setCartbtn } = product
    const { cartstate, cartdispatch } = useContext(CartContextcart)
    const { cart } = cartstate

    // console.log(cart)


    const AddCart = () => {
        cartdispatch({ type: "AddCart", payload: product })
    }

    const Remove = (id) => {
        // console.log(id)
        cartdispatch({ type: "Remove", payload: id })
    }

    // const ProductDetail = (id) =>{
    //     console.log(id)
    //     dispatch({type:"Selected-Product",payload:id})
    // }

    return (
        <Col xs="12" sm="6" md="6" lg="4" className='p-1'>
            <Card className='mt-2 product'>

                <div className='img-div'>
                    <Link to={`/product/${id}`}>
                        <img alt="Sample" src={images[0]} />
                    </Link>
                </div>
                <CardBody>
                    {/* {cart == '' && <div class="col text-center">
                        {console.log('a')}
                        <Button onClick={AddCart} style={{
                            'paddingLeft': '70px', 'paddingRight': '70px',
                            'background': 'rgb(2, 137, 204)'
                        }}>
                            Add Cart
                        </Button>
                    </div>} */}

                    {cart.some(data => data.id == id) ?
                        (<div className="col text-center">
                            <Button onClick={() => Remove(id)}>
                                RemoveCart
                            </Button>
                        </div>)
                        : (<div className="col text-center">
                            <Button onClick={AddCart} className="addtocart">
                                Add Cart
                            </Button>
                        </div>)}

                    <CardTitle tag="h5">
                        {title}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {price}
                    </CardSubtitle>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>

            </Card>
        </Col>
    );
};

export default ProductCard;