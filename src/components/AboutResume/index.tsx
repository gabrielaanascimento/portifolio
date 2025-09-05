"use client"
import React from 'react'

const AboutResume = () => {
    return (
        <div className="w-full md:w-3/4 bg-zinc-800 rounded-lg flex flex-col items-center p-8 relative">
            <img 
              src="./gabriel.jpg" 
              alt="foto perfil" 
              className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-white z-10 -mt-20 mb-8" 
            />

            <div className="w-full flex flex-col justify-center items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Gabriel Augusto</h2>
                <p className="text-zinc-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis consequatur earum delectus quia quod tempora tenetur enim nemo rerum ex illo veritatis odio officia fugit repudiandae minima, cumque eum?
                </p>
                <button 
                  className="bg-sky-400 px-5 py-2 rounded-md text-zinc-800 font-bold w-48 cursor-pointer hover:bg-sky-500 transition-colors"
                  onClick={() => window.location.href = '/about'}
                >Ver mais</button>
            </div>
        </div>
    )
}

export default AboutResume