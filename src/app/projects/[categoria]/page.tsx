"use client";

import React from "react";
import { useParams } from "next/navigation";
import { categoryProjects } from "@/services/categoryProjects";

interface Projeto {
  id: number;
  image_url: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export default function ProjectsByCategory() {
  const params = useParams<{ categoria: string }>();
  const categoria = params?.categoria; // agora tipado corretamente

  const [lista, setLista] = React.useState<Projeto[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (categoria) {
          const response: Projeto[] = await categoryProjects(categoria);
          setLista(response);
        }
      } catch (error) {
        console.error("Erro ao buscar projetos por categoria:", error);
      }
    };

    if (categoria) fetchProjects();
  }, [categoria]);

  return (
    <div style={{ minHeight: "100vh", color: "#18181b", padding: "40px" }}>
      <main style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "12px", color: "#00000" }}>
            Projetos de {categoria}
          </h1>
        </section>

        {lista.length > 0 ? (
          <section
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {lista.map((proj, i) => (
              <div key={proj.id} style={{ border: "1px solid #e4e4e7", borderRadius: "12px", background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <img src={proj.image_url} alt={proj.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px", color: '#fff' }}>{proj.title}</h3>
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
        ) : (
          <p style={{ textAlign: "center", color: "#52525b" }}>
            Nenhum projeto encontrado para essa categoria.
          </p>
        )}
      </main>
    </div>
  );
}
