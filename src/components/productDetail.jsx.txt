// src/components/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function ProductDetail({ productId }) {
  const [produto, setProduto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/api/products/${productId}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error('Erro ao carregar produto:', err));
  }, [productId]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <img src={produto.imagem || '/placeholder.jpg'} alt={produto.nome} className="w-full h-80 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold">{produto.nome}</h2>
      <p className="text-gray-700 mt-2">{produto.descricao}</p>
      <p className="text-ruby-600 font-bold text-xl mt-4">R$ {produto.preco}</p>
      <button
        className="mt-6 bg-ruby-600 text-white px-6 py-2 rounded-full hover:bg-ruby-700"
        onClick={() => navigate('/checkout', { state: { produto } })}
      >
        Comprar Agora
      </button>
    </div>
  );
}
