import { BrowserRouter as Router, Routes} from 'react-router-dom';
import CreateCustomer from '../crud/CreateCustomer';
import Customers from '../crud/Customers';
import UpdateCustomer from '../crud/UpdateCustomer';
import DeleteCustomer from '../crud/DeleteCustomer';

const Route = () => {
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

export default Route;
