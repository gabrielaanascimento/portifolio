"use client"
import React from 'react'
import CardSkills from '../CardSkills'

const Skills = () => {

    const skills = [
        {
            image: './dev-mobile.png',
            title: 'Desenvolvimento Mobile',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae odio.',
            route: '/mobile'
        },
        {
            image: './dev-frontend.png',
            title: 'Desenvolvimento Front-end',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae odio.',
            route: '/frontend'
        },
        {
            image: './dev-backend.png',
            title: 'Desenvolvimento Back-end',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae odio.',
            route: '/backend'
        },
    ]

    return (
        <div className="w-full max-w-7xl bg-zinc-800 rounded-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Áreas de Conhecimento</h2>
            <p className="text-zinc-400 text-center px-4 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae odio, temporibus voluptatem dolorem illo, repellendus deserunt culpa obcaecati doloremque distinctio. Aperiam eius aliquid commodi, numquam autem voluptates officiis animi?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
            {skills.map((skill, index) => (
                <CardSkills key={index} image={skill.image} title={skill.title} text={skill.text} route={skill.route} />
            ))}
            </div>
            <button 
                className="bg-sky-400 px-5 py-2 rounded-md text-zinc-800 font-bold w-48 mt-8 cursor-pointer hover:bg-sky-500 transition-colors"
                onClick={() => window.location.href = '/projects'}
            >Ver Projetos 🠒</button>
        </div>
    )
}

export default Skills