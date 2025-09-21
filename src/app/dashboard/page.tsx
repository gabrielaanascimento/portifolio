// src/app/dashboard/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const { data: session, status } = useSession();
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

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      {/* Botão de Logout no canto superior direito */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-red-600 text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
        >
          Sair
        </button>
      </div>

      {/* Conteúdo principal centralizado */}
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Dashboard de Gerenciamento</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* Card para Projetos */}
          <div className="bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">Gerenciar Projetos</h2>
            <p className="text-zinc-400 mb-6">
              Adicione, edite ou remova projetos do seu portfólio.
            </p>
            <Link href="/dashboard/projects" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Acessar Projetos
            </Link>
          </div>

          {/* Card para Sobre Mim */}
          <div className="bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">Gerenciar Sobre Mim</h2>
            <p className="text-zinc-400 mb-6">
              Atualize sua biografia, links e informações de contato.
            </p>
            <Link href="/dashboard/about" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Acessar 'Sobre Mim'
            </Link>
          </div>

          {/* Card para Tecnologias */}
          <div className="bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">Gerenciar Tecnologias</h2>
            <p className="text-zinc-400 mb-6">
              Adicione ou remova as tecnologias que você domina.
            </p>
            <Link href="/dashboard/technologies" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Acessar Tecnologias
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;