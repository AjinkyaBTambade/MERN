import AppRoutes from './routes/AppRoutes';
import { CustomerProvider } from './context/CustomerContext';

function App() {
  return (
    <CustomerProvider>
      <AppRoutes />
    </CustomerProvider>
  );
}

export default App;
