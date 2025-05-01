// src/pages/ProductPage.jsx
import ProductDetail from '../components/productDetail';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <ProductDetail productId={id} />
    </div>
  );
}