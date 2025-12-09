import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      </main>
  );
}
