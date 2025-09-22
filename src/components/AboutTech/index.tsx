import { getTechnologies } from '@/services/technologies';
import React from 'react';
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mongodb",
  "mysql",
  "postgresql",
  "firebase",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "php"
];

const AboutTech = () => {

  const [technologies, setTechnologies] = React.useState<any[]>([]);
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

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
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Tecnologias</h2>
      <div className="flex flex-wrap gap-2">
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech.name} className="px-3 py-1.5 border border-zinc-500 rounded-full bg-white text-sm text-zinc-600">{tech.name}</span>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutTech;