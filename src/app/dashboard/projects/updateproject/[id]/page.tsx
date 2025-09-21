// src/app/dashboard/projects/updateproject/[id]/page.tsx
'use client';

import UpdateProjectForm from '@/components/UpdateProjectForm';
import { useParams } from 'next/navigation';

const UpdateProjectPage = () => {
  const params = useParams();
  const projectId = params.id as string;

  if (!projectId) {
    return <div>Projeto não encontrado.</div>;
  }

  return <UpdateProjectForm projectId={projectId} />;
};

export default UpdateProjectPage;