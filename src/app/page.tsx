import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ScrollReveal>
      <Hero />
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </ScrollReveal>
  );
}
