// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customers from '../Customers';
import CustomerInsert from '../Crud/CustomerInsert';
import CustomerUpdate from '../Crud/CustomerUpdate';
import CustomerDelete from '../Crud/CustomerDelete';
import Customer from '../Crud/Customer';
import Navbar from '../Navbar';



const AppRoutes = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Customers />} />
      
      <Route path="/customers/:id" element={<Customer />} />
      <Route path="/insert" element={<CustomerInsert />} />
      <Route path="/update/:id" element={<CustomerUpdate />} />
      <Route path="/delete/:id" element={<CustomerDelete />} />
    </Routes>
  </>
);

export default AppRoutes;
