import React, { createContext, useContext, useEffect, useState } from 'react';
const PRODUCT_CONTEXT = createContext()
const ProductContext = ({ children }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProduct(data.data))
    }, [])
    const value = {
        product
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};
export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context
}
export default ProductContext;