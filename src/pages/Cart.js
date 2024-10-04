import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartContextcart } from '../context/CartContextcart';
import { Row, Col, Table } from 'reactstrap'
import TotalPrice from '../components/TotalPrice';


const Cart = () => {

  const { cartstate, cartdispatch } = useContext(CartContextcart)
  const { cart } = cartstate

  // console.log(cart)

  const handleIncrement = (id) => {
    cartdispatch({ type: "Increment", payload: id })
  }

  const handleDecrement = (id) => {
    cartdispatch({ type: "Decrement", payload: id })
  }

  const Remove = (id) => {
    cartdispatch({ type: "Remove", payload: id })
  }

  return (
    <Row className="justify-content-center" style={{
      alignItems: 'center', 'paddingTop': '60px',

    }}>
      <Col xs="12" sm="12" md="12" lg={{ offset: 1, size: 10 }} style={{
        textAlign: 'center',
        'paddingTop': '20px', 'marginBottom': '50px'
      }}>

        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Images
              </th>
              <th>
                Name
              </th>
              <th>
                Price
              </th>
              <th>
                Quantity
              </th>
              <th>
                Actions
              </th>
              <th>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((data, index) => {
              return (<tr>
                <th scope="row">
                  1
                </th>
                <td>
                  <div className="add-cart">
                    <img src={data.images[0]} />
                  </div>
                </td>
                <td>{data.title}</td>
                <td>{data.price}</td>
                <td> <div className='qty' style={{ "paddingTop": "10px", "paddingBottom": "10px" }}>
                  <button class="count" disabled={data.quantity === 1} onClick={() => handleDecrement(data.id)}>-</button>
                  <span class="count-value" style={{ "padding": '10px' }}>{data.quantity}</span>
                  <button class="count"  onClick={() => handleIncrement(data.id)}>+</button>
                </div></td>
                <td><button className="remove-cart" onClick={() => Remove(data.id)}
                 >Remove</button></td>
                <td>{data.quantity * data.price}</td>
              </tr>)
            })}
          </tbody>
        </Table>
        <div style={{ 'width': '100%', 'textAlign': 'right', 'paddingRight': '23px' }}>
          <TotalPrice />
        </div>
      </Col >
    </Row >)

};

export default Cart;