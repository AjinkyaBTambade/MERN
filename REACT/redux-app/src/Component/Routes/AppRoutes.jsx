
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerDetail from '../Crud/CustomerDetail';
import CustomerInsert from '../Crud/CustomerInsert';
import CustomerUpdate from '../Crud/CustomerUpdate';
import CustomerDelete from '../Crud/CustomerDelete';
import CustomerContainer from '../CustomerContainer';

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<CustomerContainer />} />
      <Route path="/customers/:id" element={<CustomerDetail />} />
      <Route path="/insert" element={<CustomerInsert />} />
      <Route path="/update/:id" element={<CustomerUpdate />} />
      <Route path="/delete/:id" element={<CustomerDelete />} />
    </Routes>
  </>
);

export default AppRoutes;
