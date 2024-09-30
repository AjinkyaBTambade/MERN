// src/components/CustomerDelete.jsx
import { deleteCustomer } from '../../redux/CustomerAction';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const CustomerDelete = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteCustomer(parseInt(id)));
    navigate('/');
  };

  return (
    <div>
      <h2>Are you sure you want to delete this customer?</h2>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate('/')}>No</button>
    </div>
  );
};

export default CustomerDelete;
