// app/projetos/[categoria]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function ProjectsByCategory() {
  const { categoria } = useParams();

  // Dados de projetos separados por categoria
  const projetos = {
    mobile: [
      {
        title: "App de Tarefas",
        desc: "Aplicativo responsivo integrado ao Firebase.",
        tech: ["React Native", "Firebase"],
        link: "#",
        img: "https://via.placeholder.com/600x300?text=App+Mobile",
      },
      {
        title: "Health Tracker",
        desc: "App para monitoramento de atividades físicas e saúde.",
        tech: ["Flutter", "Dart"],
        link: "#",
        img: "https://via.placeholder.com/600x300?text=Health+App",
      },
    ],
    frontend: [
      {
        title: "Portfólio Pessoal",
        desc: "Aplicação em Next.js com animações modernas.",
        tech: ["Next.js", "React", "Tailwind"],
        link: "#",
        img: "https://via.placeholder.com/600x300?text=Portfolio",
      },
      {
        title: "Dashboard Financeiro",
        desc: "Interface para gestão de gastos e relatórios em tempo real.",
        tech: ["React", "TypeScript", "Chart.js"],
        link: "#",
        img: "https://via.placeholder.com/600x300?text=Dashboard",
      },
    ],
    backend: [
      {
        title: "API de E-commerce",
        desc: "Backend escalável em Node.js com autenticação JWT.",
        tech: ["Node.js", "Express", "PostgreSQL"],
        link: "#",
        img: "https://via.placeholder.com/600x300?text=E-commerce+API",
      },
      {
        title: "Microserviço de Notificações",
        desc: "Serviço em NestJS para envio de notificações em tempo real.",
        tech: ["NestJS", "TypeScript", "Redis"],
        link: "#",
        img: "https://via.placeholder.com/600x300?text=Notifications+Service",
      },
    ],
  };

  // Seleciona projetos da categoria ou array vazio
  const lista = projetos[categoria as keyof typeof projetos] || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#18181b",
        padding: "40px",
      }}
    >
      <main style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* HEADER */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              border: "1px solid #e4e4e7",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 500 }}>
              {categoria?.toString().toUpperCase()}
            </span>
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "12px", color: '#fff' }}>
            Projetos de {categoria}
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "#52525b" }}>
            Aqui estão alguns projetos que desenvolvi na área de{" "}
            <b>{categoria}</b>.
          </p>
        </section>

        {/* LISTA DE PROJETOS */}
        {lista.length > 0 ? (
          <section
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {lista.map((proj, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #e4e4e7",
                  borderRadius: "12px",
                  background: "#1f2124",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  style={{ width: "100%", height: "160px", objectFit: "cover" }}
                />
                <div
                  style={{
                    padding: "20px",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px", color: '#fff' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "12px" }}>
                    {proj.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "16px",
                    }}
                  >
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "12px",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          border: "1px solid #e4e4e7",
                          background: "#f9fafb",
                          color: "#3f3f46",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.link}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      background: "#6366f1",
                      color: "white",
                      textDecoration: "none",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: 500,
                      marginTop: "auto",
                    }}
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <p style={{ textAlign: "center", color: "#52525b" }}>
            Nenhum projeto encontrado para essa categoria.
          </p>
        )}
      </main>
    </div>
  );
}
