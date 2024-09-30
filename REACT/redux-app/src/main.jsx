import { Provider } from 'react-redux';
import store from './redux/Store.jsx';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
