// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './redux/Store'; 
import AppRoutes from './routes/AppRoutes'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <AppRoutes/>
      </Router>
    </Provider>
  </React.StrictMode>
);
