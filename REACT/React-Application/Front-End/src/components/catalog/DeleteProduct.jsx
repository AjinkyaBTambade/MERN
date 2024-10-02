// src/components/DeleteProduct.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct } from '../../redux/ProductActions';

const DeleteProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteProduct(parseInt(id)));
        navigate('/');
    };

    return (
        <div>
            <h2>Delete Product</h2>
            <p>Are you sure you want to delete this product?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => navigate('/')}>No, Go Back</button>
        </div>
    );
};

export default DeleteProduct;
