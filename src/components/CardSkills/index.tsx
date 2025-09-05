import React from 'react'

interface PropsCardSkills {
    image: any;
    title: string;
    text: string;
    route: string;
}

const CardSkills = ({image, title, text, route}: PropsCardSkills) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: "25%",
        height: "100%"
    }}>
        <img src={image} alt={title} style={{
            width: '100%',
            height: '200px'
        }} />
        <h2 style={{
            fontSize: '16px',
            fontWeight: 'bold'
        }}>{title}</h2>
        <p style={{
            color: '#9fa3a9',
        }}>{text}</p>
        <a href={route} style={{
            color: '#000FFF',
            fontWeight: 700
        }}>Ver mais 🠒</a>
    </div>
  )
}

export default CardSkills