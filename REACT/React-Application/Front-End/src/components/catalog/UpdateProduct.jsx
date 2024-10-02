import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, updateProduct } from '../../redux/ProductActions';

const UpdateProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector(state => state.productState.product);

    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        description: ''
    });

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                price: product.price,
                description: product.description
            });
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(id, formData));
        navigate('/');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                ></textarea>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
