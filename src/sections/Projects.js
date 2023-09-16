import React from "react";
import Project from "../components/Project";
import { projects } from "../constants";
import Reveal from "../Framer/Reveal";

const Projects = (props) => {

  return (
    <div className="flex relative justify-center ">
      <div className="max-w-[1094px] px-[96px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="flex justify-between items-center gap-8">
          <hr className="border-t-0 border-b w-full border-b-[#adadad]" />
          <h1
            className="text-[#ebecf3] max-md:text-6xl text-6xl font-extrabold 
          tracking-tighter relative z-20 "
          >
            <Reveal>Projects<span className="text-neon">.</span></Reveal>
          </h1>
        </div>
        <div className=" grid grid-cols-2 grid-rows-2 gap-10 mt-[34px] max-md:grid-cols-1">
          {projects.map((project) => 
            (<Project
              key={project.name}
              live={project.live}
              github={project.github}
              bigText={project.bigText}
              smallText={project.smallText}
              tech={project.tech}
              imgUrl={project.imgUrl}
              name={project.name}
              modalHandlier={props.modalHandlier}
            />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
