import "./globals.css";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import ExperiencesTimeline from "@/components/experiences-timeline";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";

export default function Home() {
  return ( 
          <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <ExperiencesTimeline />
            <Technologies />
      </main>
  );
}
