
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
import CreateCustomer from '../CRM/Components/Customers/CreateCustomer';
import UpdateCustomer from '../CRM/Components/Customers/UpdateCustomer';
import DeleteCustomer from '../CRM/Components/Customers/DeleteCustomer';


import ListOrders from '../OrderProcessing/Components/Orders/ListOrders';
import CreateOrder from '../OrderProcessing/Components/Orders/CreateOrder';
import UpdateOrder from '../OrderProcessing/Components/Orders/UpdateOrder';
import DeleteOrder from '../OrderProcessing/Components/Orders/DeleteOrder';


import Dashboard from '../BI/Components/Dashboard';
import LineChart from '../BI/Components/Charts/LineChart';
import BarChart from '../BI/Components/Charts/BarChart';
import PieChart from '../BI/Components/Charts/PieChart';
import MembershipForm from '../Membership/Components/MembershipForm';
import CatalogCategory from '../Membership/Components/CatalogCategory';


import Gallery from '../Catalog/Components/Gallery/Gallery';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<CatalogCategory />} />

    <Route path="tap" element={<Tap />} />

    <Route path="gallery" element={<Gallery />} />

    <Route path="products" element={<List />} />
    <Route path="products/:productId" element={<Details />} />
    <Route path="products/update/:productId" element={<Update />} />
    <Route path="products/delete/:productId" element={<Delete />} />
    <Route path="products/create" element={<Create />} />


    <Route path="customers/:customerId" element={<CustomerDetails />} />
    <Route path="customers" element={<CustomerList />} />
    <Route path="customers/add" element={<CreateCustomer />} />
    <Route path="customers/update/:id" element={<UpdateCustomer />} />
    <Route path="customers/delete/:id" element={<DeleteCustomer />} />


    <Route path="/orders" element={<ListOrders />} />
    <Route path="/orders/create" element={<CreateOrder />} />
    <Route path="/orders/update/:id" element={<UpdateOrder />} />
    <Route path="/orders/delete/:id" element={<DeleteOrder />} />

    <Route path="dashboard" element={<Dashboard />}>
      <Route path="line" element={<LineChart />}></Route>
      <Route path="bar" element={<BarChart />}></Route>
      <Route path="pie" element={<PieChart />}></Route>
    </Route>
  </Routes>
);

export default AppRoutes;
