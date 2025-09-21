// pages/login.tsx
"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Particles } from '@/components/ui/particles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError('Credenciais inválidas. Tente novamente.');
    } else if (result?.ok) {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
      <div className='particles-grid-container'>
              <Particles
                quantity={200}
                ease={80}
                color={"#000000"}
                refresh
              />
            </div>
    </div>
  );
};

export default Login;