import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Component/Routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;
