// src/components/UpdateProduct.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, updateProduct } from '../../redux/ProductActions';

const UpdateProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector(state => state.product.products.find(p => p.id === parseInt(id)));

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        unitPrice: 0,
        quantity: 0,
        likes: 0
    });

    useEffect(() => {
        if (!product) {
            dispatch(fetchProduct(parseInt(id)));
        } else {
            setFormData({
                title: product.title,
                description: product.description,
                unitPrice: product.unitPrice,
                quantity: product.quantity,
                likes: product.likes
            });
        }
    }, [dispatch, id, product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(parseInt(id), formData));
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'unitPrice' || name === 'quantity' || name === 'likes' ? parseFloat(value) : value
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Product Title" required/>
                </div>
                <div>
                    <label>Description:</label
                    ><textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required></textarea>
                </div>
                <div>
                    <label>Unit Price:</label>
                    <input type="number" name="unitPrice" value={formData.unitPrice} onChange={handleChange} placeholder="Unit Price" step="0.01" required/>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required/>
                </div>
                <div>
                    <label>Likes:</label>
                    <input type="number" name="likes" value={formData.likes} onChange={handleChange} placeholder="Likes" required />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
