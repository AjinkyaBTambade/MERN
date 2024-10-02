// src/redux/ProductActions.js
import ProductServiceFetch from '../services/ProductServiceFetch';

// Action Types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const PRODUCT_ERROR = 'PRODUCT_ERROR';

// Action Creators

export const fetchProducts = () => async (dispatch) => {
    try {
        const products = await ProductServiceFetch.getAllProducts();
        dispatch({
            type: FETCH_PRODUCTS,
            payload: products
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.message || 'Failed to fetch products'
        });
    }
};

export const fetchProduct = (id) => async (dispatch) => {
    try {
        const product = await ProductServiceFetch.getProductById(id);
        dispatch({
            type: FETCH_PRODUCT,
            payload: product
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.message || 'Failed to fetch product'
        });
    }
};

export const createProduct = (product) => async (dispatch) => {
    try {
        const newProduct = await ProductServiceFetch.createProduct(product);
        dispatch({
            type: CREATE_PRODUCT,
            payload: newProduct
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.message || 'Failed to create product'
        });
    }
};

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const updatedProduct = await ProductServiceFetch.updateProduct(id, product);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: updatedProduct
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.message || 'Failed to update product'
        });
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await ProductServiceFetch.deleteProduct(id);
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.message || 'Failed to delete product'
        });
    }
};
