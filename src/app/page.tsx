import Header from "@/components/Header";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-30">
      <Header />
      <Skills />
    </div>
  );
}