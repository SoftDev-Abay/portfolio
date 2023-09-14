import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({
  live,
  github,
  bigText,
  smallText,
  tech,
  imgUrl,
  name,
  modalHandlier,
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
            imgUrl,
            name,
          });
        }}
        className=" cursor-pointer relative overflow-hidden rounded-xl bg-[#232323] max-h-[250px] group"
      >
        <img
          className=" rounded-lg relative top-10 duration-150 group-hover:ease-in ease-out scale-85 group-hover:rotate-2 group-hover:scale-90"
          src={imgUrl}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center gap-3 mt-5">
        <h1
          className="text-[#ebecf3] text-2xl font-extrabold 
          tracking-tighter relative z-20 "
        >
          {name}
        </h1>
        <hr className="border-t-0 border-b w-4/5 border-b-[#adadad]" />
        <div className="flex justify-between gap-4 ">
          <FaGithub
            href={github}
            className="text-2xl text-[#7e7e82] hover:text-neon"
          />
          <FaExternalLinkAlt
            href={live}
            className="text-2xl text-[#7e7e82] hover:text-neon"
          />
        </div>
      </div>
      <p className="text-neon text-lg font-medium mt-3.5">{tech}</p>
      <p className="text-[#c0c1c7] text-xl mt-3.5">
        {smallText}
        <a
          onClick={() => {
            modalHandlier({
              live,
              github,
              bigText,
              tech,
              imgUrl,
              name,
            });
          }}
          className="text-neon"
        >{` Learn more >`}</a>
      </p>
    </div>
  );
};

export default Project;
