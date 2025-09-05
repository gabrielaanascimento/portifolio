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
        <div style={{
            width: '70%',
            backgroundColor: '#393d42',
            borderRadius: '10px',
            marginTop: '12%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '3rem'
        }}>
            <h2 style={{
                fontSize: '30px',
                fontWeight: 'bold'
            }}>Areas de Conhecimento</h2>
            <p style={{ color: "#9fa3a9", textAlign: 'center', padding: '40px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae odio, temporibus voluptatem dolorem illo, repellendus deserunt culpa obcaecati doloremque distinctio. Aperiam eius aliquid commodi, numquam autem voluptates officiis animi?</p>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
            {skills.map((skill, index) => (
                <CardSkills key={index} image={skill.image} title={skill.title} text={skill.text} route={skill.route} />
            ))}
            </div>
            <button 
                style={{
                    backgroundColor: '#61dafb',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    color: '#393d42',
                    fontWeight: 'bold',
                    width: '12rem',
                    position: 'relative',
                    margin: '0 auto',
                    marginTop: '1rem',
                    cursor: 'pointer'
                }}
                onClick={() => window.location.href = '/projects'}
                >Ver Projetos 🠒</button>
        </div>
    )
}

export default Skills