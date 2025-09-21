import { getTechnologies } from '@/services/technologies';
import React from 'react';

const AboutTech = () => {

  const [technologies, setTechnologies] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchTechnologies = async () => {
      const res = await getTechnologies();
      setTechnologies(res);
      console.log(res); 
    };
    fetchTechnologies();
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Tecnologias</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech.name} className="px-3 py-1.5 border border-zinc-200 rounded-full bg-white text-sm text-zinc-600">{tech.name}</span>
        ))}
      </div>
    </section>
  );
};

export default AboutTech;