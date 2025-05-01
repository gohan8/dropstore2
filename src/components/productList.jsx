// src/components/ProductList.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/api/products')
      .then(res => setProdutos(res.data))
      .catch(err => console.error('Erro ao carregar produtos:', err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {produtos.map(prod => (
        <div key={prod.id} className="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
          <img src={prod.imagem || '/placeholder.jpg'} alt={prod.nome} className="w-full h-48 object-cover rounded-lg mb-2" />
          <h2 className="text-lg font-semibold">{prod.nome}</h2>
          <p className="text-sm text-gray-600">{prod.descricao?.slice(0, 100)}...</p>
          <p className="text-emerald-600 font-bold mt-2">R$ {prod.preco}</p>
          <Link to={`/produto/${prod.id}`} className="block mt-3 text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-center">
            Ver Detalhes
          </Link>
        </div>
      ))}
    </div>
  );
}
