import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'reactstrap';
import { CartContext } from '../context/CartContext';
import { CartContextcart } from '../context/CartContextcart';
import { ProductContext } from '../context/ProductContext';
import { Row, Col } from 'reactstrap'

const Navbar = () => {
    const {cartstate,cartdispatch} = useContext(CartContextcart)
    const {  dispatch } = useContext(ProductContext)
    const { cart } = cartstate
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault()
        // console.log(searchTerm)
        dispatch({ type: "Search", payload: searchTerm })
    }


    return (
        <Row className=' pt-3'>
            <Col xs="8" sm="8" md="9" lg="10" className='search'>
                <Form inline onSubmit={handleSearch} className="">
                    <Input
                        type="text" onChange={(e) => setSearchTerm(e.target.value)}
                        name="query"
                        placeholder="Search..."
                        className="mr-sm-2 "
                    />
                    <Button className='text-white' type="submit" style={{'background':'#101011'}}>
                        Search
                    </Button>
                </Form>
            </Col>
            <Col xs="4" sm="4" md="3" lg="2" className='menu pt-1 '>
                <Link to="/" className='text-white'>Home</Link>
                <Link to="/cart" className='text-white' style={{
                    'position': 'relative'
                }}>
                    Cart
                    <span style={{
                        'position': 'absolute', 'top': '-12px',
                        'right': '-12px'
                    }}>{cart.length}</span>
                </Link>
            </Col>
        </Row >
    );
};

export default Navbar;



