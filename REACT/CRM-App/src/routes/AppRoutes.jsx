import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Customers from '../components/Customers';
import CreateCustomer from '../components/CreateCustomer';
import UpdateCustomer from '../components/UpdateCustomer';
import DeleteCustomer from '../components/DeleteCustomer';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/add" element={<CreateCustomer />} />
        <Route path="/update/:id" element={<UpdateCustomer />} />
        <Route path="/delete/:id" element={<DeleteCustomer />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
