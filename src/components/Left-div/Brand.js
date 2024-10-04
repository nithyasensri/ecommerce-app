import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { ProductContext } from '../../context/ProductContext';
import { useContext } from 'react';

const Brand = () => {
    const { state, dispatch } = useContext(ProductContext)
    const { products, brand, category } = state


    const BrandList = products.filter((data) => {
        if (data.category === category) {
            return data.brand
        }
    })

    // console.log(BrandList)

    const uniqueBrands = [...new Set(BrandList.map((brand) => brand.brand))];

    // console.log(uniqueBrands)
    const BrandChange = (e, option) => {
        const check = e.target.checked
        console.log(check)
        dispatch({ type: "Brand", payload: { option, check } })
    }

    return (
        <div className='brands'>
            {uniqueBrands.length > 0  && <h5 style={{ textAlign: "justify" }}>Brands</h5>}
            <Form className="form-brands">
                <FormGroup check>
                    {uniqueBrands.map((item, index) => (
                        <div>
                            <Input key={index} type="checkbox" value={item}
                                onChange={(e) => BrandChange(e, item)} />
                            <Label check>
                                {item}
                            </Label>
                        </div>
                    ))}
                </FormGroup>
            </Form>

        </div>
    );
};

export default Brand;