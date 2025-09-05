import React from 'react'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      desc: "Aplicação em Next.js com animações modernas e integração com CMS.",
      tech: ["Next.js", "React", "Tailwind"],
      link: "#",
      img: "https://via.placeholder.com/600x300?text=Portfólio",
    },
    {
      title: "API de E-commerce",
      desc: "Backend escalável em Node.js com autenticação JWT e banco PostgreSQL.",
      tech: ["Node.js", "Express", "PostgreSQL"],
      link: "#",
      img: "https://via.placeholder.com/600x300?text=E-commerce+API",
    },
    {
      title: "Dashboard Financeiro",
      desc: "Interface interativa para gestão de gastos e relatórios em tempo real.",
      tech: ["React", "TypeScript", "Chart.js"],
      link: "#",
      img: "https://via.placeholder.com/600x300?text=Dashboard",
    },
    {
      title: "App de Tarefas",
      desc: "Aplicativo simples e responsivo com integração ao Firebase.",
      tech: ["React", "Firebase"],
      link: "#",
      img: "https://via.placeholder.com/600x300?text=To-do+App",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", color: "#18181b", padding: "40px" }}>
      <main style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* HEADER */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 12px", border: "1px solid #e4e4e7", borderRadius: "20px", background: "rgba(255,255,255,0.7)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "20px" }}>
            <span style={{ fontSize: "14px", fontWeight: 500 }}>Projetos</span>
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "12px", color: '#fff' }}>Meus Projetos</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "#52525b" }}>
            Alguns dos trabalhos que desenvolvi recentemente, com foco em design moderno, performance e usabilidade.
          </p>
        </section>

        {/* GRID DE PROJETOS */}
        <section style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginBottom: "60px" }}>
          {projects.map((proj, i) => (
            <div key={i} style={{ border: "1px solid #e4e4e7", borderRadius: "12px", background: "#1f2124", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <img src={proj.img} alt={proj.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px", color: '#fff' }}>{proj.title}</h3>
                <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "12px" }}>{proj.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {proj.tech.map((t) => (
                    <span key={t} style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "20px", border: "1px solid #e4e4e7", background: "#f9fafb", color: "#3f3f46" }}>{t}</span>
                  ))}
                </div>
                <a href={proj.link} style={{ padding: "8px 14px", borderRadius: "20px", background: "#61dafb", color: "white", textDecoration: "none", textAlign: "center", fontSize: "14px", fontWeight: 500, marginTop: "auto" }}>Ver Projeto</a>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ border: "2px dashed #e4e4e7", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px", color: '#fff' }}>Gostou dos meus projetos?</h3>
          <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "16px" }}>Entre em contato e vamos discutir como posso ajudar no seu próximo desafio.</p>
          <a href="mailto:seuemail@exemplo.com" style={{ padding: "10px 20px", borderRadius: "20px", background: "#61dafb", color: "white", textDecoration: "none", marginRight: "12px" }}>Falar comigo</a>
          <a href="/about" style={{ padding: "10px 20px", borderRadius: "20px", border: "1px solid #e4e4e7", textDecoration: "none", color: "#fff" }}>Sobre mim</a>
        </section>
      </main>
    </div>
  );
}
