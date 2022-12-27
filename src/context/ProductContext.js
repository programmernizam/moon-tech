import React, { createContext, useEffect, useState } from 'react';
const PRODUCT_CONTEXT = createContext()
const ProductContext = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products").then(res => res.json()).then(data => setProduct(data.data))
    }, [])
    const values = {
        product
    }
    return (
        <PRODUCT_CONTEXT.Provider value={values}>
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductContext;