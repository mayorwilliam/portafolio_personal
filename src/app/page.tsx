import ScrollReveal from "@/components/ScrollReveal";
import HeroIntro from "@/components/HeroIntro";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ScrollReveal>
      <HeroIntro />
      <Projects />
      <Contact />
    </ScrollReveal>
  );
}
