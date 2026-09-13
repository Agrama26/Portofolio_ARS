import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Organizations from "@/components/portfolio/Organizations";
import Gallery from "@/components/portfolio/Gallery";
import Contact from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agung Ramadhan Setiawan — Web Developer" },
      {
        name: "description",
        content:
          "Portofolio Agung Ramadhan Setiawan, Web Developer lulusan D4 Teknik Informatika Politeknik Negeri Lhokseumawe. Antarmuka web responsif, interaktif, dan rapi.",
      },
      { property: "og:title", content: "Agung Ramadhan Setiawan — Web Developer" },
      {
        property: "og:description",
        content:
          "Web Developer — D4 Teknik Informatika, Politeknik Negeri Lhokseumawe. Portofolio proyek & keahlian.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Organizations />
      <Gallery />
      <Contact />
    </main>
  );
}
