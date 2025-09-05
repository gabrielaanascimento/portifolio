import React from 'react'

const AboutTalkToMe = () => {
    return (
        <section className="border-2 border-dashed border-zinc-200 rounded-lg p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Vamos construir algo incrível?</h3>
            <p className="text-sm text-zinc-500 mb-4">Entre em contato e me conte sobre o seu projeto ou ideia.</p>
            <a href="mailto:gabrielaugustoassisnascimento@gmail.com" className="px-5 py-2.5 rounded-full bg-indigo-500 text-white no-underline mr-3 hover:bg-indigo-600 transition-colors">Falar comigo</a>
            <a href="/projects" className="px-5 py-2.5 rounded-full border border-zinc-200 text-white no-underline hover:bg-zinc-800 transition-colors">Ver Projetos</a>
        </section>
    )
}

export default AboutTalkToMe