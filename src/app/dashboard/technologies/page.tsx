// src/app/dashboard/technologies/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { getTechnologies, addTechnology, deleteTechnology } from '@/services/technologies';
import { Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Technology {
    id: string;
    name: string;
}

const TechnologiesPage = () => {
    const { status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return (
          <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white">
            <h1 className="text-2xl">Carregando...</h1>
          </div>
        );
      }
    
    if (status === 'unauthenticated') {
        router.push('/login');
        return null;
    }

    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [newTechnologyName, setNewTechnologyName] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTechnologies = async () => {
        try {
            setLoading(true);
            const data = await getTechnologies();
            setTechnologies(data);
        } catch (err) {
            setError('Erro ao carregar a lista de tecnologias.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTechnologies();
    }, []);

    const handleAddTechnology = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTechnologyName.trim()) {
            alert('O nome da tecnologia não pode estar vazio.');
            return;
        }

        try {
            await addTechnology({ name: newTechnologyName });
            setNewTechnologyName('');
            fetchTechnologies(); // Recarrega a lista
            alert('Tecnologia adicionada com sucesso!');
        } catch (err) {
            console.error('Erro ao adicionar tecnologia:', err);
            alert('Erro ao adicionar tecnologia.');
        }
    };

    const handleDeleteTechnology = async (id: string) => {
        if (window.confirm('Tem certeza que deseja deletar esta tecnologia?')) {
            try {
                await deleteTechnology(id);
                fetchTechnologies(); // Recarrega a lista
                alert('Tecnologia deletada com sucesso!');
            } catch (err) {
                console.error('Erro ao deletar tecnologia:', err);
                alert('Erro ao deletar tecnologia.');
            }
        }
    };

    if (loading) {
        return <div className="text-center text-gray-700">Carregando tecnologias...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4 bg-zinc-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Gerenciar Tecnologias</h1>
            
            {/* Formulário para Adicionar */}
            <div className="bg-zinc-800 p-6 rounded-lg shadow-md mb-8 max-w-lg mx-auto">
                <h2 className="text-xl font-semibold mb-4">Adicionar Nova Tecnologia</h2>
                <form onSubmit={handleAddTechnology} className="flex gap-4">
                    <input
                        type="text"
                        value={newTechnologyName}
                        onChange={(e) => setNewTechnologyName(e.target.value)}
                        placeholder="Nome da tecnologia"
                        className="flex-grow px-3 py-2 rounded-md border border-zinc-700 bg-zinc-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Adicionar
                    </button>
                </form>
            </div>

            {/* Lista de Tecnologias */}
            <div className="bg-zinc-800 p-6 rounded-lg shadow-md max-w-lg mx-auto">
                <h2 className="text-xl font-semibold mb-4">Tecnologias Existentes</h2>
                {technologies.length > 0 ? (
                    <ul className="space-y-3">
                        {technologies.map((tech, index) => (
                            <li key={tech.id || index} className="flex items-center justify-between bg-zinc-700 p-3 rounded-md">
                                <span className="text-lg">{tech.name}</span>
                                <button
                                    onClick={() => handleDeleteTechnology(tech.id)}
                                    className="text-red-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-zinc-400">Nenhuma tecnologia cadastrada.</p>
                )}
            </div>
        </div>
    );
};

export default TechnologiesPage;