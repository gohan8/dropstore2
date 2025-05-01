// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-turquoise-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl tracking-wide">💎 Joias & Makes</h1>
        <ul className="flex gap-6 text-white font-semibold">
          <li><Link to="/" className="hover:underline">Produtos</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Minha Conta</Link></li>
        </ul>
      </div>
    </nav>
  );
}