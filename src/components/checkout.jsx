// src/components/Checkout.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../services/api';

export default function Checkout() {
  const { state } = useLocation();
  const produto = state?.produto;
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({ nome: '', email: '', cpf: '', telefone: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.ali.post('/api/order', { cliente, produto });
      alert('Pedido criado com sucesso!');
      navigate('/dashboard', { state: { cpf: cliente.cpf } });
    } catch (err) {
      console.error('Erro ao enviar pedido:', err);
      alert('Erro ao fazer pedido.');
    }
  };

  if (!produto) return <p>Produto não selecionado.</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Produto: {produto.nome}</h2>
      {['nome', 'email', 'cpf', 'telefone'].map(campo => (
        <input
          key={campo} required
          placeholder={campo.toUpperCase()}
          className="w-full border p-2 rounded"
          value={cliente[campo]}
          onChange={e => setCliente({ ...cliente, [campo]: e.target.value })}
        />
      ))}
      <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
        Finalizar Pedido
      </button>
    </form>
  );
}