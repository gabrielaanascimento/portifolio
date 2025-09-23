// src/components/AboutTalkToMe/index.tsx
import React from 'react';
import CtaSection from '@/components/CtaSection'; // Importe o novo componente

interface AboutTalkToMeProps {
  email: string;
}

const AboutTalkToMe = ({ email }: AboutTalkToMeProps) => {
  return (
    <CtaSection
      title="Vamos construir algo incrível?"
      description="Entre em contato e me conte sobre o seu projeto ou ideia."
      primaryButtonText="Falar comigo"
      primaryButtonLink={`mailto:${email}`}
      secondaryButtonText="Ver Projetos"
      secondaryButtonLink="/projects"
    />
  );
};

export default AboutTalkToMe;