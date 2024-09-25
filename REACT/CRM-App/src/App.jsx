import Route from './routes/Route';
import { CustomerProvider } from './context/CustomerContext';

function App() {
  return (
    <CustomerProvider>
      <Route />
    </CustomerProvider>
  );
}

export default App;
