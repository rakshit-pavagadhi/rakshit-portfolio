import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-24 pb-10">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}