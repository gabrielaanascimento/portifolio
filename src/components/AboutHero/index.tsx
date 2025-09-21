import React from 'react'

interface AboutHeroProps {
  name?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  bio?: string;
}

const AboutHero = ({name, email, github, linkedin, bio}: AboutHeroProps) => {
  return (
    <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-200 rounded-full bg-white bg-opacity-70 shadow-sm mb-5">
            <span className="text-sm text-black font-medium">Sobre mim</span>
          </div>

          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-zinc-800 text-white text-3xl font-bold">
            GA
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-black">{name}</h1>
          <p className="max-w-xl mx-auto mb-6 text-gray-800">
            {bio}
          </p>

          <div className="flex justify-center gap-3">
            <a href={github} target="_blank" className="px-4 py-2 border border-gray-400 rounded-full text-black no-underline hover:bg-zinc-200 transition-colors">GitHub</a>
            <a href={linkedin} target="_blank" className="px-4 py-2 border border-gray-400 rounded-full text-black no-underline hover:bg-zinc-200 transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} target="_blank" className="px-4 py-2 border border-gray-400 rounded-full text-black no-underline hover:bg-zinc-200 transition-colors">Contato</a>
          </div>
    </section>
  )
}

export default AboutHero