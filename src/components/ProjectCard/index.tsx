// src/components/ProjectCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { deleteProject } from '@/services/deleteProject';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link: string;
  category: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  onDeleteSuccess: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDeleteSuccess }) => {
  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja deletar este projeto?')) {
      try {
        await deleteProject(project.id);
        alert('Projeto deletado com sucesso!');
        onDeleteSuccess();
      } catch (error) {
        alert('Erro ao deletar o projeto.');
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        {project.image_url && (
          <Image
            src={project.image_url}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{project.category}</p>
          <p className="text-gray-700 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
            <a href={`projects/updateproject/${project.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
              Editar
            </a>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;