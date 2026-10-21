import dynamic from "next/dynamic";
import { LoadingScreen } from "@components/LoadingScreen";
import { ScrollProgress } from "@components/ScrollProgress";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Hero } from "@features/hero/components/Hero";
import { About } from "@features/about/components/About";

const Education = dynamic(() => import("@features/education/components/Education").then(m => m.Education));
const Certifications = dynamic(() => import("@features/certifications/components/Certifications").then(m => m.Certifications));
const Experience = dynamic(() => import("@features/experience/components/Experience").then(m => m.Experience));
const Projects = dynamic(() => import("@features/projects/components/Projects").then(m => m.Projects));
const Contact = dynamic(() => import("@features/contact/components/Contact").then(m => m.Contact));

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Certifications />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
