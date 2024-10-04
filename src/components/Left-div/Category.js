import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { ProductContext } from '../../context/ProductContext';
import { useContext } from 'react';

const Category = () => {

    const { state, dispatch } = useContext(ProductContext)
    const { category } = state

    const CategoryChange = (option) => {
        // const check = e.target.checked
        // console.log(option)
        dispatch({ type: "Category", payload: option })
    }



    return (
        <div className='category'>
            <h5 style={{ textAlign: "justify" }}>Categories</h5>
            <Form>
                <FormGroup className='form-category'>
                    <Input id="exampleEmail" name="all" placeholder="" value="all"
                        type="radio" onChange={() => CategoryChange("all")}
                        checked={category === "all"} />
                    {' '}
                    <Label check>All</Label>
                </FormGroup>
                <FormGroup className='form-category'>
                    <Input id="exampleEmail" name="smartphones" placeholder="" value="furniture"
                        type="radio" onChange={() => CategoryChange("furniture")}
                        checked={category === "furniture"} />
                    {' '}
                    <Label check>Furniture</Label>
                </FormGroup>
                <FormGroup className='form-category'>
                    <Input name="fragrances" placeholder="" value="fragrances" type="radio"
                        onChange={() => CategoryChange("fragrances")}
                        checked={category === "fragrances"} />
                    {' '}
                    <Label check>
                        Fragrances
                    </Label>
                </FormGroup>
                <FormGroup className='form-category' >
                    <Input name="groceries" placeholder="" value="groceries" type="radio"
                        onChange={() => CategoryChange("groceries")}
                        checked={category === "groceries"} />
                    {' '}
                    <Label check>
                        Grocceries
                    </Label>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Category;