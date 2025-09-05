import React from 'react'

const AboutTalkToMe = () => {
    return (
        <section style={{ border: "2px dashed #e4e4e7", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px", color: '#fff' }}>Vamos construir algo incrível?</h3>
            <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "16px" }}>Entre em contato e me conte sobre o seu projeto ou ideia.</p>
            <a href="mailto:gabrielaugustoassisnascimento@gmail.com" style={{ padding: "10px 20px", borderRadius: "20px", background: "#6366f1", color: "white", textDecoration: "none", marginRight: "12px" }}>Falar comigo</a>
            <a href="/projects" style={{ padding: "10px 20px", borderRadius: "20px", border: "1px solid #e4e4e7", textDecoration: "none", color: "#fff" }}>Ver Projetos</a>
        </section>
    )
}

export default AboutTalkToMe