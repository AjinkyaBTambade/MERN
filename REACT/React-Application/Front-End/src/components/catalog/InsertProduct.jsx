import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/ProductActions';

const InsertProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name: '',
        price: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(product));
        setProduct({ name: '', price: 0 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Insert Product</h2>
            <input
                type="text"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                placeholder="Product Name"
            />
            <input
                type="number"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                placeholder="Price"
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default InsertProduct;
