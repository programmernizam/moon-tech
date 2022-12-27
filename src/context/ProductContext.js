import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../state/ProductState/productReducer';
const PRODUCT_CONTEXT = createContext()
const ProductContext = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState)
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