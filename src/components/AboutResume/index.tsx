"use client"
import React from 'react'

const AboutResume = () => {
    return (
        <div style={{
            width: '70%',
            height: '300px',
            backgroundColor: '#393d42',
            borderRadius: '10px',
        }}>

            <img src="./gabriel.jpg" alt="foto perfil" style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '3px solid white',
                position: 'relative',
                top: "-25%",
                margin: '0 auto',
                zIndex: 999
            }} />

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                position: 'relative',
                textAlign: 'center',
                top: -100,
                padding: '50px',
                paddingBottom: '90px'
            }}>
                <h2
                style={{
                    fontSize: '30px',
                    fontWeight: 'bold'
                }}
                >Gabriel Augusto</h2>
                <p style={{ color: '#9fa3a9' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis consequatur earum delectus quia quod tempora tenetur enim nemo rerum ex illo veritatis odio officia fugit repudiandae minima, cumque eum?
                </p>
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
                onClick={() => window.location.href = '/about'}
                >Ver mais</button>
            </div>

        </div>
    )
}

export default AboutResume