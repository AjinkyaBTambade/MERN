import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../catalog/ProductList';
import ProductDetails from '../catalog/ProductDetails';
import InsertProduct from '../catalog/InsertProduct';
import UpdateProduct from '../catalog/UpdateProduct';
import DeleteProduct from '../catalog/DeleteProduct';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/insert" element={<InsertProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/delete/:id" element={<DeleteProduct />} />
        </Routes>
    );
};

export default AppRoutes;
