// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProdcutList from './pages/ProdutcList';
import ProductPage from './pages/productPage';
import CheckoutPage from './pages/checkoutPage';
import DashboardPage from './pages/cashboardPage';
import Navbar from './components/navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<ProdcutList />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}
