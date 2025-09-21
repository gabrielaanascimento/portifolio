// src/app/dashboard/about/page.tsx
'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import UpdateAboutForm from "@/components/UpdateAboutForm";
import React from "react";

const AboutPageDashboard = () => {
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
      <UpdateAboutForm />
    </div>
  );
};

export default AboutPageDashboard;