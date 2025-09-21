// src/components/UpdateProjectForm.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { updateProject } from '@/services/updateProject';
import { getProjectById } from '@/services/getProjectById';

interface ProjectUpdateData {
  title?: string;
  description?: string;
  link?: string;
  image_url?: string;
  category?: string;
  technologies?: string;
}

interface UpdateProjectFormProps {
  projectId: string;
}

const UpdateProjectForm: React.FC<UpdateProjectFormProps> = ({ projectId }) => {
  const [formData, setFormData] = useState<ProjectUpdateData>({
    title: '',
    description: '',
    link: '',
    image_url: '',
    category: '',
    technologies: '',
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (projectId) {
      const fetchProjectData = async () => {
        try {
          const project = await getProjectById(projectId);
          setFormData({
            ...project,
            technologies: project.technologies.join(', ')
          });
          setLoading(false);
        } catch (err) {
          setError('Erro ao carregar os dados do projeto.');
          setLoading(false);
        }
      };
      fetchProjectData();
    }
  }, [projectId]);

  // ... (o restante do código do componente UpdateProjectForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // This part would need a more complex backend for image updates.
    // For now, let's assume you're updating the image_url directly.
    // In a real application, you would handle image upload separately.
    console.log('Image change handled, assuming image_url update is coming from a separate process.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSend = {
        title: formData.title,
        description: formData.description,
        link: formData.link,
        image_url: formData.image_url,
        category: formData.category,
        technologies: (formData.technologies || '').split(',').map(tech => tech.trim()),
      };

      const updatedProject = await updateProject(projectId, dataToSend);
      console.log('Projeto atualizado com sucesso:', updatedProject);
      alert('Projeto atualizado com sucesso!');
    } catch (err) {
      console.error('Erro:', err);
      alert('Erro ao atualizar o projeto.');
    }
  };

  if (loading) {
    return <div className="text-center text-gray-700">Carregando formulário...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Atualizar Projeto</h2>
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

          {/* Campo URL da Imagem (adaptação para a atualização) */}
          <div className="mb-4">
            <label htmlFor="image_url" className="block text-gray-700 font-bold mb-2">URL da Imagem</label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
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
              Atualizar Projeto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProjectForm;