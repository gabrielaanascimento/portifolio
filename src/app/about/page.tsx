import AboutContent from "@/components/AboutContent";
import AboutHero from "@/components/AboutHero";
import AboutTalkToMe from "@/components/AboutTalkToMe";
import AboutTech from "@/components/AboutTech";
import * as React from "react";

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", color: "#18181b", padding: "40px" }}>
      <main style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* HERO */}
        <AboutHero />

        {/* SOBRE */}
        <AboutContent />

        {/* TECNOLOGIAS */}
        <AboutTech />

        {/* CTA */}
        <AboutTalkToMe />
      </main>
    </div>
  );
}
