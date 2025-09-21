// src/components/UpdateAboutForm/index.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { getAbout, updateAbout } from '@/services/about';

interface AboutData {
  full_name: string;
  email: string;
  github_link: string;
  linkedin_link: string;
  bio: string;
  phone: string;
  location: string;
}

const UpdateAboutForm: React.FC = () => {
  const [formData, setFormData] = useState<AboutData>({
    full_name: '',
    email: '',
    github_link: '',
    linkedin_link: '',
    bio: '',
    phone: '',
    location: '',
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAbout();
        setFormData(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os dados "Sobre Mim".');
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateAbout(formData);
      alert('Dados "Sobre Mim" atualizados com sucesso!');
    } catch (err) {
      console.error('Erro ao atualizar:', err);
      alert('Erro ao atualizar os dados "Sobre Mim".');
    }
  };

  if (loading) {
    return <div className="text-center text-gray-700">Carregando dados...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Atualizar Dados "Sobre Mim"</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo Nome Completo */}
          <div className="mb-4">
            <label htmlFor="full_name" className="block text-gray-700 font-bold mb-2">Nome Completo</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Bio */}
          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo GitHub Link */}
          <div className="mb-4">
            <label htmlFor="github_link" className="block text-gray-700 font-bold mb-2">Link do GitHub</label>
            <input
              type="url"
              id="github_link"
              name="github_link"
              value={formData.github_link}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          
          {/* Campo LinkedIn Link */}
          <div className="mb-4">
            <label htmlFor="linkedin_link" className="block text-gray-700 font-bold mb-2">Link do LinkedIn</label>
            <input
              type="url"
              id="linkedin_link"
              name="linkedin_link"
              value={formData.linkedin_link}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Telefone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Localização */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Localização</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Botão de Envio */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Atualizar Dados
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAboutForm;