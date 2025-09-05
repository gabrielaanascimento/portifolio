import React from 'react'

const NavBar = () => {
    return (
        <div className="w-[95%] lg:w-1/2 py-4 flex items-center justify-center bg-zinc-800 rounded-lg z-50">
            <ul className="list-none flex justify-center items-center gap-8 lg:gap-20 text-white text-xl font-bold p-0 m-0">
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/projects">Projetos</a></li>
                <li className="bg-sky-400 px-5 py-2.5 rounded-md text-zinc-800 font-bold">
                    <a href='/contact'>Contato</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar