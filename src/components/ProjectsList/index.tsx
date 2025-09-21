// src/components/ProjectsList.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ProjectCard from '../ProjectCard';
import { allProjects } from '@/services/allProjects';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link: string;
  category: string;
  technologies: string[];
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await allProjects();
      setProjects(data);
    } catch (err) {
      setError('Erro ao carregar a lista de projetos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-700">Carregando projetos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-200">Meus Projetos</h1>
          <a href="projects/newproject" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Adicionar Novo Projeto
          </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} onDeleteSuccess={fetchProjects} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Nenhum projeto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;