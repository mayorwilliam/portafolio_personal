import ScrollReveal from "@/components/ScrollReveal";
import HeroIntro from "@/components/HeroIntro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ScrollReveal>
      <HeroIntro />
      <Projects />
      <Experience />
      <Contact />
    </ScrollReveal>
  );
}
