import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgb(74_222_128/0.08),transparent_60%)]" />
      <Navbar />
      <main className="divide-y divide-line/50">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line/50 py-8 text-center text-sm text-muted">
        Thanks for stopping by — let&apos;s build something great together.
      </footer>
    </>
  );
}
