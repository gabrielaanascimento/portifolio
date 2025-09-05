import React from 'react'

const AboutTech = () => {
  return (
    <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Tecnologias</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "PHP", "React Native", "MySql", "HTML", "CSS", "Python", "Git", "GitHub", "Figma"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 border border-zinc-200 rounded-full bg-white text-sm text-zinc-600">{tech}</span>
            ))}
          </div>
        </section>
  )
}

export default AboutTech