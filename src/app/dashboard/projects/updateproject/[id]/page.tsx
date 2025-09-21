// src/app/dashboard/projects/updateproject/[id]/page.tsx
'use client';

import UpdateProjectForm from '@/components/UpdateProjectForm';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const UpdateProjectPage = () => {
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

  const params = useParams();
  const projectId = params.id as string;

  if (!projectId) {
    return <div>Projeto não encontrado.</div>;
  }

  return <UpdateProjectForm projectId={projectId} />;
};

export default UpdateProjectPage;