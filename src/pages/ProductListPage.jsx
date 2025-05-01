// src/pages/productListPage.jsx
import ProductList from '../components/ProductList';

export default function ProductListPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">Produtos Disponíveis</h1>
      <ProductList />
    </div>
  );
}
