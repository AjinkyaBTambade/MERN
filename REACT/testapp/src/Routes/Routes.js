
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Main/Components/Home';
import About from '../Main/Components/About';
import Contact from '../Main/Components/Contact';
import Tap from '../Main/Components/Tap';

import Login from '../Membership/Components/Login';
import Register from '../Membership/Components/Register';

import List from '../Catalog/Components/Products/List';
import Details from '../Catalog/Components/Products/Details';
import Create from '../Catalog/Components/Products/Create';
import Update from '../Catalog/Components/Products/Update';
import Delete from '../Catalog/Components/Products/Delete';

import CustomerList from '../CRM/Components/Customers/CustomerList';
import CustomerDetails from '../CRM/Components/Customers/CustomerDetails';
//import CreateCustomer from '../CRM/Components/Customers/Create';
//import UpdateCustomer from '../CRM/Components/Customers/Update';
//import DeleteCustomer from '../CRM/Components/Customers/Delete';


import Dashboard from '../BI/Components/Dashboard';
import LineChart from '../BI/Components/Charts/LineChart';
import BarChart from '../BI/Components/Charts/BarChart';
import PieChart from '../BI/Components/Charts/PieChart';
import MembershipForm from '../Membership/Components/MembershipForm';
import CatalogCategory from '../Membership/Components/CatalogCategory';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<CatalogCategory />} />

    <Route path="tap" element={<Tap />} />

    <Route path="products" element={<List />} />
    <Route path="products/:productId" element={<Details />} />
    <Route path="products/update/:productId" element={<Update />} />
    <Route path="products/delete/:productId" element={<Delete />} />
    <Route path="products/create" element={<Create />} />


    <Route path="customers/:customerId" element={<CustomerDetails />} />
    <Route path="customers" element={<CustomerList />} />
     {/*<Route path="customers/add" element={<CreateCustomer />} />
    <Route path="customers/update/:customerId" element={<UpdateCustomer />} />
    <Route path="customers/delete/:customerId" element={<DeleteCustomer />} />*/}




    <Route path="dashboard" element={<Dashboard />}>
      <Route path="line" element={<LineChart />}></Route>
      <Route path="bar" element={<BarChart />}></Route>
      <Route path="pie" element={<PieChart />}></Route>
    </Route>
  </Routes>
);

export default AppRoutes;
