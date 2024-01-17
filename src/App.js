import { useState, useRef, useEffect } from "react";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ProjectModal from "./components/ProjectModal";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  const [isOpenProjectModal, setIsOpenProjectModal] = useState(false);
  const ProjectModalHandlier = (value) => {
    setIsOpenProjectModal(value);
  };

  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`p-0 m-0 bg-gray-300 grid grid-cols-main-grid-structure`}>
      <SideNav activeSection={activeSection} />
      <main id="top" className="relative bg-[#111111] ">
        <ProjectModal
          isOpen={isOpenProjectModal}
          modalHandlier={ProjectModalHandlier}
        />
        <LanguageToggle />
        <Navbar />
        <section className="" id="hero" data-section>
          <Hero />
        </section>
        <section id="about" className="mt-[300px]" data-section>
          <About />
        </section>
        <section id="projects" className="mt-[300px]" data-section>
          <Projects modalHandlier={ProjectModalHandlier} />
        </section>
        <section id="experience" className="mt-[300px]" data-section>
          <Experience />
        </section>
        <section id="contact" className="mt-[50px]" data-section>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
