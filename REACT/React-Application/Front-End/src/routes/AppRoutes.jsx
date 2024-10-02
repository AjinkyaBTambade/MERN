// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductContainer from '../components/catalog/ProductContainer';
import InsertProduct from '../components/catalog/InsertProduct';
import DeleteProduct from '../components/catalog/DeleteProduct';
import ProductDetails from '../components/catalog/ProductDetails';
import UpdateProduct from '../components/catalog/UpdateProduct';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductContainer />} />
            <Route path="/insert" element={<InsertProduct />} />
            <Route path="/delete/:id" element={<DeleteProduct />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
    );
};

export default AppRoutes;
