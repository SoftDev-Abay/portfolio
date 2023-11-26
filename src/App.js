import { useState } from "react";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ProjectModal from "./components/ProjectModal";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const [isOpenProjectModal, setIsOpenProjectModal] = useState(false);
  const ProjectModalHandlier = (value) => {
    setIsOpenProjectModal(value);
  };
  return (
    <div className={`p-0 m-0 bg-gray-300 grid grid-cols-main-grid-structure`}>
      <SideNav />
      <main id="top" className="relative bg-[#111111] ">
        <ProjectModal
          isOpen={isOpenProjectModal}
          modalHandlier={ProjectModalHandlier}
        />
        <Navbar />
        <section className="">
          <Hero />
        </section>
        <section id="about" className="mt-[300px]">
          <About />
        </section>
        <section id="projects" className="mt-[300px]">
          <Projects modalHandlier={ProjectModalHandlier} />
        </section>
        <section id="experience" className="mt-[300px]">
          <Experience />
        </section>
        <section id="contact" className="mt-[50px]">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
