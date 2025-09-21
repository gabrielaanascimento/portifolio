// src/components/ProjectForm.tsx
"use client";
import { createProject } from '@/services/newProject';
import React, { useState } from 'react';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  image: File | null;
  category: string;
  technologies: string;
}

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState<ProjectData>({
    title: '',
    description: '',
    link: '',
    image: null,
    category: '',
    technologies: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        if (!e.target.files?.length) return; // sai se não tiver arquivo
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append('title', formData.title);
    dataToSend.append('description', formData.description);
    dataToSend.append('link', formData.link);
    dataToSend.append('category', formData.category);
    dataToSend.append('technologies', formData.technologies);

    if (formData.image) {
      dataToSend.append('image', formData.image);
    }

    try {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: dataToSend,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload da imagem.');
      }

      const result = await response.json();
      console.log('Upload bem-sucedido!', result);
      alert('Projeto e imagem cadastrados! URL da imagem: ' + result.imageUrl);

      // Aqui você pode enviar os outros dados do projeto para sua API, incluindo a URL da imagem retornada
      const createDataResponse = await createProject({
        title: formData.title,
        description: formData.description,
        link: formData.link,
        image_url: result.imageUrl,
        category: formData.category,
        technologies: formData.technologies.split(',').map(tech => tech.trim()),
      });
      console.log('Projeto criado com sucesso:', createDataResponse);
      alert('Projeto cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao cadastrar o projeto.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Cadastrar Novo Projeto</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo Título */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Descrição */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Link */}
          <div className="mb-4">
            <label htmlFor="link" className="block text-gray-700 font-bold mb-2">Link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Upload de Imagem */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Upload da Imagem</label>
            <input
              type="file" 
              id="image"
              name="image"
              onChange={handleImageChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Categoria */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Categoria</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo Tecnologias */}
          <div className="mb-6">
            <label htmlFor="technologies" className="block text-gray-700 font-bold mb-2">Tecnologias (separadas por vírgula)</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
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
              Cadastrar Projeto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;