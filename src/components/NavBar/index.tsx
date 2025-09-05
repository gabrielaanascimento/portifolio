import React from 'react'

const NavBar = () => {
    return (
        <div style={{
            width: '50%',
            height: '75px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1f2124',
            borderRadius: '10px',
            position: 'fixed',
            top: '20px',
        }}
        >
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '80px',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                padding: 0,
                }}>
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/projects">Projetos</a></li>
                <li style={{
                    backgroundColor: '#61dafb',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    color: '#393d42',
                    fontWeight: 'bold',
                }}><a href='/contact'>Contato</a></li>
            </ul>
        </div>
    )
}

export default NavBar