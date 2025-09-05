import React from 'react'

interface PropsCardSkills {
    image: any;
    title: string;
    text: string;
    route: string;
}

const CardSkills = ({image, title, text, route}: PropsCardSkills) => {
  return (
    <div className="flex flex-col w-full h-full p-4 bg-zinc-900 rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-48 md:h-56 object-cover rounded-md mb-4" />
        <h2 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-zinc-400 text-sm mb-4 flex-grow">{text}</p>
        <a href={`/projects${route}`} className="text-sky-400 font-bold hover:underline">Ver mais 🠒</a>
    </div>
  )
}

export default CardSkills