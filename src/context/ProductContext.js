import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/productReducer';
const PRODUCT_CONTEXT = createContext()
const ProductContext = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState)
    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch("https://moon-tech-server-8wyt.onrender.com/products")
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data }))
            .catch(() => dispatch({ type: actionTypes.FETCHING_ERROR }))
    }, [])
    const value = {
        state, dispatch
    }
    // console.log(state)
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