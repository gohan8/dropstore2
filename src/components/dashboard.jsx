// src/components/Dashboard.jsx
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard() {
  const { state } = useLocation();
  const cpf = state?.cpf;
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    if (cpf) {
      api.post('/api/pedidos-cliente', { cpf })
        .then(res => setPedidos(res.data))
        .catch(err => console.error('Erro ao buscar pedidos:', err));
    }
  }, [cpf]);

  if (!cpf) return <p>Nenhum cliente informado.</p>;

  return (
    <div>
      <h2 className="text-lg font-bold">Pedidos do cliente CPF: {cpf}</h2>
      {pedidos.length === 0 ? (
        <p className="mt-4 text-gray-500">Nenhum pedido encontrado.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {pedidos.map((pedido, i) => (
            <li key={i} className="border p-4 rounded shadow">
              <p><strong>ID:</strong> {pedido.id}</p>
              <p><strong>Data:</strong> {pedido.data}</p>
              <p><strong>Status:</strong> {pedido.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
