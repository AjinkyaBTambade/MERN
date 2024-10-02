import ProductServiceFetch from '../services/ProductServiceFetch';

// Action Types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Action Creators
export const fetchProducts = () => async (dispatch) => {
    const products = await ProductServiceFetch.getAllProducts();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: products
    });
};

export const fetchProduct = (id) => async (dispatch) => {
    const product = await ProductServiceFetch.getProductById(id);
    dispatch({
        type: FETCH_PRODUCT,
        payload: product
    });
};

export const createProduct = (product) => async (dispatch) => {
    const newProduct = await ProductServiceFetch.createProduct(product);
    dispatch({
        type: CREATE_PRODUCT,
        payload: newProduct
    });
};

export const updateProduct = (id, product) => async (dispatch) => {
    const updatedProduct = await ProductServiceFetch.updateProduct(id, product);
    dispatch({
        type: UPDATE_PRODUCT,
        payload: updatedProduct
    });
};

export const deleteProduct = (id) => async (dispatch) => {
    await ProductServiceFetch.deleteProduct(id);
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    });
};
