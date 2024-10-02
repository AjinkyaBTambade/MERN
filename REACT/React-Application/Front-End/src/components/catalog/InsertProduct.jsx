// src/components/InsertProduct.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/ProductActions';
import { useNavigate } from 'react-router-dom';

const InsertProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        description: '',
        unitPrice: 0,
        quantity: 0,
        likes: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(product));
        setProduct({ title: '', description: '', unitPrice: 0, quantity: 0, likes: 0 });
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === 'unitPrice' || name === 'quantity' || name === 'likes' ? parseFloat(value) : value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Insert Product</h2>
            <div>
                <label>Title:</label>
                 <input type="text" name="title" value={product.title} onChange={handleChange} placeholder="Product Title" required/>
            </div>
            <div>
                <label>Description:</label> 
                <textarea name="description" value={product.description} onChange={handleChange} placeholder="Product Description" required></textarea>
            </div>
            <div>
                <label>Unit Price:</label>
                 <input type="number" name="unitPrice" value={product.unitPrice} onChange={handleChange} placeholder="Unit Price" step="0.01" required/>
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" required/>
            </div>
            <div>
                <label>Likes:</label>
                <input type="number" name="likes" value={product.likes} onChange={handleChange} placeholder="Likes" required/>
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default InsertProduct;
