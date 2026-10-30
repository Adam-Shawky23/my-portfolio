import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Cloud from "@/components/Cloud";
import Design from "@/components/Design";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Cloud />
        <Design />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
