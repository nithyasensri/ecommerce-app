import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext'

const Price = () => {
    const { state, dispatch } = useContext(ProductContext)
    const {price} = state
// console.log(price)
    const priceSort = (option) => {
        dispatch({
            type: option === "lth" ? "LTH" : "HTL",
            payload: option === "lth" ? "lth" : "htl"
        })

    }

    return (
        <div className='price'>
            <Form>
                <h5>Price</h5>
                <FormGroup className="form-price">
                    <Input id="exampleEmail" name="lth" placeholder="" value="lth"
                        type="radio" onChange={() => priceSort("lth")} 
                        checked={price==="lth"}/>
                    {' '}
                    <Label check> Low to high</Label>
                </FormGroup>
                <FormGroup className="form-price">
                    <Input id="exampleEmail" name="htl" placeholder="" value="htl"
                        type="radio" onChange={() => priceSort("htl")} 
                        checked={price==="htl"}/>
                    {' '}
                    <Label check> High to Low </Label>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Price;