import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { Skills } from "@/components/home/skills";
import { Contact } from "@/components/home/contact";
import { Testimonials } from "@/components/home/testimonials";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getFeaturedProjects, getPersonalInfo, getExperience, getSkills, getTestimonials } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const personal = getPersonalInfo();
  const featuredProjects = getFeaturedProjects();
  const experiences = getExperience();
  const skills = getSkills();
  const testimonials = getTestimonials();

  return (
    <main className="min-h-screen bg-background relative">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
        Skip to content
      </a>

      <Navbar />

      <div id="main-content">
        <Hero personal={personal} />

        {/* Featured Work */}
        <AnimatedSection className="container py-32 px-4 sm:px-8" id="projects">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="inline-block text-xs font-mono uppercase tracking-[0.15em] bg-foreground text-background rounded-full px-3 py-1 mb-3">Selected Work</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link href="/projects" className="hidden sm:block">
              <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
                All projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects">
              <Button variant="outline" className="w-full rounded-full">
                View All Projects
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <Experience experiences={experiences} />

        <Skills skills={skills} />

        <Testimonials testimonials={testimonials} />

        <Contact personal={personal} />
      </div>

      <Footer socialLinks={personal.socialLinks} name={personal.name} />
    </main>
  );
}
