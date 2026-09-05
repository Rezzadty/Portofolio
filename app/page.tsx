import { LoadingScreen } from "@/src/shared/components/LoadingScreen";
import { ScrollProgress } from "@/src/shared/components/ScrollProgress";
import { Navbar } from "@/src/shared/components/Navbar";
import { Footer } from "@/src/shared/components/Footer";
import { Hero } from "@/src/features/hero/components/Hero";
import { About } from "@/src/features/about/components/About";
import { Experience } from "@/src/features/experience/components/Experience";
import { Education } from "@/src/features/education/components/Education";
import { Projects } from "@/src/features/projects/components/Projects";
import { Contact } from "@/src/features/contact/components/Contact";

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
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
