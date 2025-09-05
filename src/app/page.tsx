import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Header />
    <Skills />
    </div>
  );
}
