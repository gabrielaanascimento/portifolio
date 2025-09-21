"use client"
import React from 'react'
import CardSkills from '../CardSkills'
import { RainbowButton } from '../ui/rainbow-button'

const Skills = () => {

    const skills = [
        {
            image: './dev-mobile.png',
            title: 'Desenvolvimento Mobile',
            text: 'Desenvolvo aplicativos mobile com React Native.',
            route: '/mobile'
        },
        {
            image: './dev-frontend.png',
            title: 'Desenvolvimento Front-end',
            text: 'Desenvolvo aplicações web com tecnologias como React, Html, Next, entre outras.',
            route: '/frontend'
        },
        {
            image: './dev-backend.png',
            title: 'Desenvolvimento Back-end',
            text: 'Desenvolvo aplicações back-end com Node.js, PHP e Python.',
            route: '/backend'
        },
    ]

    return (
        <div className="w-full max-w-7xl bg-white rounded-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">Áreas de Conhecimento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
                {skills.map((skill, index) => (
                    <CardSkills key={index} image={skill.image} title={skill.title} text={skill.text} route={skill.route} />
                ))}
            </div>
            
            <RainbowButton className="mt-6" onClick={() => window.location.href = '/projects'}>Ver Projetos 🠒</RainbowButton>

        </div>
    )
}

export default Skills