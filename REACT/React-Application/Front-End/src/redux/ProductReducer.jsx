import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './ProductActions';

const initialState = {
    products: [],
    product: null,
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                )
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
};
export default ProductReducer;