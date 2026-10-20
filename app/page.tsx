import { LoadingScreen } from "@components/LoadingScreen";
import { ScrollProgress } from "@components/ScrollProgress";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Hero } from "@features/hero/components/Hero";
import { About } from "@features/about/components/About";
import { Experience } from "@features/experience/components/Experience";
import { Education } from "@features/education/components/Education";
import { Certifications } from "@features/certifications/components/Certifications";
import { Projects } from "@features/projects/components/Projects";
import { Contact } from "@features/contact/components/Contact";

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
