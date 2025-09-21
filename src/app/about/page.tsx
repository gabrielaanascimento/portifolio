"use client";
import AboutContent from "@/components/AboutContent";
import AboutHero from "@/components/AboutHero";
import AboutTalkToMe from "@/components/AboutTalkToMe";
import AboutTech from "@/components/AboutTech";
import { getAbout } from "@/services/about";
import { getTechnologies } from "@/services/technologies";
import * as React from "react";

type AboutData = {
  full_name: string;
  email: string;
  github_link: string;
  linkedin_link: string;
  bio: string;
  phone: string;
};

export default function AboutPage() {

  const [aboutData, setAboutData] = React.useState<AboutData | null>(null);

  React.useEffect(() => {
    const res = async () => {
     const dataAbout = await getAbout();
     setAboutData(dataAbout);
    }
    res();
  }, []);

  return (
    <div style={{ minHeight: "100vh", color: "#18181b", padding: "40px" }}>
      <main style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* HERO */}
        {aboutData && <AboutHero name={aboutData.full_name} email={aboutData.email} bio={aboutData.bio} github={aboutData.github_link} linkedin={aboutData.linkedin_link} />}

        {/* SOBRE */}
        <AboutContent />

        {/* TECNOLOGIAS */}
        <AboutTech />

        {/* CTA */}
        {aboutData && <AboutTalkToMe email={aboutData.email} />}
      </main>
    </div>
  );
}
