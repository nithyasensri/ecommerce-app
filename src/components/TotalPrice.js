import React from 'react';

import { useContext } from 'react';
import { CartContextcart } from '../context/CartContextcart';

const TotalPrice = () => {
    
    const {cartstate,cartdispatch} = useContext(CartContextcart)
    const {cart} = cartstate


    const TotalPrice = cart.reduce((acc,cur)=> acc + cur.price * cur.quantity,0)
    const RoundTotal= Math.floor(TotalPrice *2)/2
    return (
        <div>
            <h5>Total:{RoundTotal}</h5>
        </div>
    );
};

export default TotalPrice;