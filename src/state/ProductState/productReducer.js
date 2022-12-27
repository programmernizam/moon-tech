import { actionTypes } from "./actionTypes"

export const initialState = {
    loading: false,
    products: [],
    error: false
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        default: { return state }
    }
}