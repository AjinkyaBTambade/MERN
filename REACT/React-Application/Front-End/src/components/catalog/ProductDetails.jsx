// src/components/ProductDetails.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../redux/ProductActions';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) => 
        state.product.products.find((prod) => prod.id === parseInt(id))
    );
    const error = useSelector((state) => state.product.error);
    const loading = useSelector((state) => state.product.loading);

    useEffect(() => {
        if (!product) {
            dispatch(fetchProduct(parseInt(id)));
        }
    }, [dispatch, id, product]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (loading || !product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <p><strong>Title:</strong> {product.title}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Unit Price:</strong> ${product.unitPrice.toFixed(2)}</p>
            <p><strong>Quantity:</strong> {product.quantity}</p>
            <p><strong>Likes:</strong> {product.likes}</p>
        </div>
    );
};

export default ProductDetails;
