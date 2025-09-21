// src/App.tsx
"use client";
import React from 'react';
import ProjectForm from '@/components/ProjectForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const NewProjectPage = () => {
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

  return (
    <div>
      <ProjectForm />
    </div>
  );
};

export default NewProjectPage;