"use client"
import { getAbout } from '@/services/about';
import { allProjects } from '@/services/allProjects';
import React from 'react'

export default function ProjectsPage() {
  const [projects, setProjects] = React.useState<any[]>([]);
  const [email, setEmail] = React.useState<string>("");
  React.useEffect(() => {
    try {
      const fetchProjects = async () => {
        const data = await allProjects();
        const email = await getAbout() 
        setEmail(email.email);
        setProjects(data);
        console.log(data);
      }
      fetchProjects();
    } catch (error) {
      console.log("Erro ao buscar projetos:", error);
      alert("Erro ao buscar projetos");
    }
  }, []);
  return (
    <div style={{ minHeight: "100vh", color: "#18181b", padding: "40px" }}>
      <main style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* HEADER */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 12px", border: "1px solid #e4e4e7", borderRadius: "20px", background: "rgba(255,255,255,0.7)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "20px" }}>
            <span style={{ fontSize: "14px", fontWeight: 500 }}>Projetos</span>
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "12px", color: 'black' }}>Meus Projetos</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "#52525b" }}>
            Alguns dos trabalhos que desenvolvi recentemente, com foco em performance e usabilidade.
          </p>
        </section>

        {/* GRID DE PROJETOS */}
        <section style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginBottom: "60px" }}>
          {projects.map((proj, i) => (
            <div key={proj.id} style={{ border: "1px solid #e4e4e7", borderRadius: "12px", background: "white", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <img src={proj.image_url} alt={proj.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px", color: 'black' }}>{proj.title}</h3>
                <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "12px" }}>{proj.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {proj.technologies.map((t: any) => (
                    <span key={t} style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "20px", border: "1px solid #e4e4e7", background: "#f9fafb", color: "#3f3f46" }}>{t}</span>
                  ))}
                </div>
                <a href={proj.link} target='_blank' style={{ padding: "8px 14px", borderRadius: "20px", background: "black", color: "white", textDecoration: "none", textAlign: "center", fontSize: "14px", fontWeight: 500, marginTop: "auto" }}>Ver Projeto</a>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ border: "2px dashed #ccc", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px", color: '#000' }}>Gostou dos meus projetos?</h3>
          <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "16px" }}>Entre em contato e vamos discutir como posso ajudar no seu próximo desafio.</p>
          <a href={`mailto:${email}`} style={{ padding: "10px 20px", borderRadius: "20px", background: "gray", color: "white", textDecoration: "none", marginRight: "12px" }}>Falar comigo</a>
          <a href="/about" style={{ padding: "10px 20px", borderRadius: "20px", border: "1px solid gray", textDecoration: "none", color: "black" }}>Sobre mim</a>
        </section>
      </main>
    </div>
  );
}
