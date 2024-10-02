import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/Store'; 
import AppRoutes from './components/routes/AppRoutes'; 

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
