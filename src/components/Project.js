import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SlideReveal from "../Framer/SlideReveal";
import Reveal from "../Framer/Reveal";

const Project = ({
  live,
  github,
  bigText,
  smallText,
  tech,
  imgs,
  name,
  modalHandlier,
  openSpan,
  heroImg,
}) => {
  return (
    <div className="flex flex-col ">
      <div
        onClick={() => {
          modalHandlier({
            live,
            github,
            bigText,
            tech,
            imgs,
            name,
          });
        }}
        className=" cursor-pointer relative overflow-hidden rounded-xl bg-[#232323]  group"
      >
        <img
          className=" h-[232px] w-full  rounded-lg relative top-5 duration-150 group-hover:ease-in ease-out scale-85 group-hover:rotate-2 group-hover:scale-90"
          src={heroImg}
          alt=""
        />
      </div>

      <SlideReveal childrenWidth="100%" childrenOverflow="hidden">
        <div className="flex justify-between items-center gap-3 mt-5">
          <h1
            className="text-[#ebecf3] text-2xl font-extrabold 
          tracking-tighter relative z-20 "
          >
            {name}
          </h1>
          <hr className="border-t-0 border-b w-4/5 border-b-[#adadad]" />
          <div className="flex justify-between gap-4 ">
            {github && (
              <a href={github} target="_blank">
                <FaGithub className="text-2xl text-[#7e7e82] hover:text-neon cursor-pointer" />
              </a>
            )}

            <a href={live} target="_blank">
              <FaExternalLinkAlt className="text-2xl text-[#7e7e82] hover:text-neon cursor-pointer" />
            </a>
          </div>
        </div>
      </SlideReveal>

      <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
        <p className="text-neon text-lg font-medium mt-3.5">{tech}</p>
      </SlideReveal>
      <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
        <p className="text-[#c0c1c7] text-xl mt-3.5">
          {smallText}
          <a
            onClick={() => {
              modalHandlier({
                live,
                github,
                bigText,
                tech,
                imgs,
                name,
              });
            }}
            className="text-neon cursor-pointer"
          >
            {" "}
            {openSpan} {" >"}
          </a>
        </p>
      </SlideReveal>
    </div>
  );
};

export default Project;
