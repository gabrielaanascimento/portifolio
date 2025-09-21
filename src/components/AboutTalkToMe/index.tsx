import React from 'react'

interface AboutTalkToMeProps {
    email: string;
}

const AboutTalkToMe = ({email}: AboutTalkToMeProps) => {
    return (
        <section className="border-2 border-dashed border-zinc-600 rounded-lg p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black">Vamos construir algo incrível?</h3>
            <p className="text-sm text-zinc-700 mb-4">Entre em contato e me conte sobre o seu projeto ou ideia.</p>
            <a href={`mailto:${email}`} className="px-5 py-2.5 rounded-full bg-zinc-500 text-white no-underline mr-3 hover:bg-zinc-600 transition-colors">Falar comigo</a>
            <a href="/projects" className="px-5 py-2.5 rounded-full border border-zinc-500 text-black no-underline hover:bg-zinc-600 transition-colors">Ver Projetos</a>
        </section>
    )
}

export default AboutTalkToMe