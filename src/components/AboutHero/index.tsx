import React from 'react'

const AboutHero = () => {
  return (
    <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 12px", border: "1px solid #e4e4e7", borderRadius: "20px", background: "rgba(255,255,255,0.7)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "20px" }}>
            <span style={{ fontSize: "14px", fontWeight: 500 }}>Sobre mim</span>
          </div>

          <div style={{ width: "100px", height: "100px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(to bottom right, #6366f1, #393d42)", color: "white", fontSize: "32px", fontWeight: "bold" }}>
            GA
          </div>

          <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "12px", color: '#fff' }}>Gabriel Augusto</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px", color: "#52525b" }}>
            Desenvolvedor Full-Stack focado em criar experiências digitais rápidas, acessíveis e com belo design. Amo transformar ideias em produtos que geram impacto real.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <a href="https://github.com/gabrielaanascimento" target="_blank"  style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: "20px", textDecoration: "none", color: "#fff" }}>GitHub</a>
            <a href="#" target="_blank" style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: "20px", textDecoration: "none", color: "#fff" }}>LinkedIn</a>
            <a href="mailto:gabrielaugustoassisnascimento@gmail.com" target="_blank" style={{ padding: "8px 16px", border: "1px solid #e4e4e7", borderRadius: "20px", textDecoration: "none", color: "#fff" }}>Contato</a>
          </div>
        </section>
  )
}

export default AboutHero