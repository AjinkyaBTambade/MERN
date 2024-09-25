import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customers from '../components/Customers';
import CreateCustomer from '../components/CreateCustomer';
import UpdateCustomer from '../components/UpdateCustomer';
import DeleteCustomer from '../components/DeleteCustomer';
import CustomerDetails from '../components/CustomerDetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/add" element={<CreateCustomer />} />
        <Route path="/update/:id" element={<UpdateCustomer />} />
        <Route path="/delete/:id" element={<DeleteCustomer />} />
        <Route path="/details/:id" element={<CustomerDetails />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;
