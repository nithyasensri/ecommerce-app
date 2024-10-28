import React from 'react';

import { Row, Col, Button } from 'reactstrap'

import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';
import { useContext, useEffect, useState } from 'react';
import Leftdiv from '../components/Left-div/Leftdiv';



const Product = () => {
    const { state, dispatch } = useContext(ProductContext)
    const { products, price, category, brand, search } = state


    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const data = response.data.products;
            console.log(data); // Check if data is being fetched
            dispatch({ type: "Set-Products", payload: data });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        console.log('aa')
        fetchProducts()
    }, [])


    const getProductsByPriceSort = (products, type) => {
        const priceSortedProducts = products.sort((product1, product2) => type === "lth" ? product1.price - product2.price
            : type === "htl" ? product2.price - product1.price : products);

        return priceSortedProducts
    }

    const getProductsByCategory = (products, category) => {
        const productCategories = products.filter((prod) =>
            category !== "all" ? category.includes(prod.category) : prod)
        return productCategories
    }

    const getProductsByBrands = (products, brand) => {
        const productBrands = products.filter((prod) =>
            brand.length > 0 ? brand.includes(prod.brand) : prod)
        return productBrands
    }

    const getProductsBySearch = (products, search) => {
        const productName = products.filter((prod) => search !== '' ?
            prod.title.toLowerCase().includes(search) : prod)
        return productName
    }

  


    const filteredProductsByPrice = getProductsByPriceSort(products, price);
    const filteredProductsByBrand = getProductsByBrands(filteredProductsByPrice, brand)
    const filteredProductsByCategory = getProductsByCategory(filteredProductsByBrand, category);
    const filteredProductsBySearch = getProductsBySearch(filteredProductsByCategory, search);
    
  


    return (
        <Col xs={{ offset: 1, size: 10 }} sm={{ offset: 1, size: 10 }}  md={{ offset: 1, size: 10 }} className='top-main'>
            <Row>
                <Col xs="12" sm="3" className='left-row'>
                    <Leftdiv />
                </Col>
                <Col xs="12" sm="9">
                    <Row>
                        {filteredProductsBySearch.length > 0 ? (filteredProductsBySearch.map((data, index) => <ProductCard key={index} product={data} />))
                        :<>No products found</>}
                    </Row>
                  
                </Col>

            </Row>
        </Col>
    );
};

export default Product;