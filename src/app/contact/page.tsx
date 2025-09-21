"use client";
import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { getAbout } from "@/services/about";

type AboutData = {
  full_name: string;
  email: string;
  github_link: string;
  linkedin_link: string;
  bio: string;
  phone: string;
  location: string;
};

export default function ContactPage() {

  const [aboutData, setAboutData] = React.useState<AboutData | null>(null);
  useEffect(() => {

    const fetchEmail = async () => {  
      const email = await getAbout()
      setAboutData(email);
    }
    fetchEmail();
    }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#18181b",
        padding: "40px",
      }}
    >
      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            <span style={{ fontSize: "14px", fontWeight: 500 }}>Contato</span>
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "12px", color: '#fff' }}>
            Vamos conversar?
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "#52525b" }}>
            Ficarei feliz em trocar ideias, colaborar em novos projetos ou apenas
            bater um papo. Escolha uma das formas abaixo para me contatar.
          </p>
        </section>

        {/* INFO DE CONTATO */}
        <section
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              border: "1px solid #e4e4e7",
              borderRadius: "12px",
              background: "white",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <Mail size={22} color="#6366f1" />
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 600 }}>Email</h3>
              <a
                href={`mailto:${aboutData?.email}`}
                style={{
                  fontSize: "14px",
                  color: "#52525b",
                  textDecoration: "none",
                  textWrap: 'wrap'

                }}
              >
                <p style={{
                  flexWrap: 'wrap'
                }}>{aboutData?.email}</p>
              </a>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e4e4e7",
              borderRadius: "12px",
              background: "white",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <Phone size={22} color="#6366f1" />
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 600 }}>Telefone</h3>
              <a
                href="tel:+5511952812474"
                style={{
                  fontSize: "14px",
                  color: "#52525b",
                  textDecoration: "none",
                }}
              >
                {aboutData?.phone}
              </a>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e4e4e7",
              borderRadius: "12px",
              background: "white",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <MapPin size={22} color="#6366f1" />
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 600 }}>Localização</h3>
              <p style={{ fontSize: "14px", color: "#52525b" }}>
                {aboutData?.location}
              </p>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e4e4e7",
              borderRadius: "12px",
              background: "white",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <Linkedin size={22} color="#6366f1" />
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 600 }}>Linkedin</h3>
              <a style={{ fontSize: "14px", color: "#52525b", textDecoration: "none" }} href={aboutData?.linkedin_link} target="_blank" rel="noopener noreferrer">
                {aboutData?.linkedin_link}
              </a>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO DE CONTATO */}
        <section
          style={{
            border: "1px solid #e4e4e7",
            borderRadius: "12px",
            background: "white",
            padding: "32px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "20px" }}>
            Envie uma mensagem
          </h2>
          <form style={{ display: "grid", gap: "16px" }} action={`https://formsubmit.co/${aboutData?.email}`} method="POST">
            <input
              type="text"
              placeholder="Seu nome"
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #e4e4e7",
                fontSize: "14px",
              }}
            />
            <input
              type="email"
              placeholder="Seu email"
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #e4e4e7",
                fontSize: "14px",
              }}
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #e4e4e7",
                fontSize: "14px",
                resize: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                background: "#6366f1",
                color: "white",
                border: "none",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
