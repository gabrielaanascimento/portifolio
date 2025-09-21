import Header from "@/components/Header";
import Skills from "@/components/Skills";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <Skills />
      <div className='particles-grid-container'>
        <Particles
          quantity={200}
          ease={80}
          color={"#000000"}
          refresh
        />
      </div>
    </div>
  );
}