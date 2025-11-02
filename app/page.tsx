import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
    </main>
  );
}
