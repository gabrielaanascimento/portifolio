import React from 'react'

const AboutTech = () => {
  return (
<section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px", color: '#fff' }}>Tecnologias</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "PHP", "React Native", "MySql", "HTML", "CSS", "Python", "Git", "GitHub", "Figma"].map((tech) => (
              <span key={tech} style={{ padding: "6px 12px", border: "1px solid #e4e4e7", borderRadius: "20px", background: "white", fontSize: "14px", color: "#3f3f46" }}>{tech}</span>
            ))}
          </div>
        </section>
  )
}

export default AboutTech