import React from "react";
import {AiOutlineClose} from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt, FaCross } from "react-icons/fa";


const ProjectModal = ({ isOpen,modalHandlier }) => {
  console.log(isOpen);
  return (
    <>
      {isOpen && (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full backdrop-blur-md z-50 overflow-y-scroll">
          <div className="absolute top-3 right-3 cursor-pointer" onClick={()=>{modalHandlier(false)}}>
            <AiOutlineClose className="text-slate-gray text-xl font-extrabold" />
          </div>
          <div className="modal-container flex justify-center relative top-44   ">
            <div className="modal min-w-[40%] w-[700px] max-w-[90%]  m-auto h-fit min-h-[550px]">
              <div className="flex flex-col bg-[#232323] rounded-xl">
                <div className="relative overflow-hidden rounded-t-xl bg-[#232323]">
                  <img
                    className=" rounded-t-lg relative"
                    src={isOpen.imgUrl}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center gap-3 mt-5">
                    <h1
                      className="text-[#ebecf3] text-4xl font-extrabold 
           relative z-20 "
                    >
                      {isOpen.name}
                    </h1>
                  </div>
                  <p className="text-neon text-lg font-medium mt-3.5">
                    {isOpen.tech}
                  </p>
                  <p className="text-[#c0c1c7] text-lg mt-5">
                    {isOpen.bigText}
                  </p>
                  <div className="mt-5">
                    <h1
                      className="text-[#ebecf3] text-2xl font-bold 
          relative z-20 "
                    >
                      Projects links<span className="text-neon">.</span>
                    </h1>

                    <div className="flex gap-2 mt-2">
                      <a href="" className="gap-2 flex text-neon font-medium text-base items-center">
                      <FaGithub href={isOpen.github} className="text-base text-neon" /> source code
                      </a>
                      <a href="" className="gap-2 flex text-neon font-medium text-base items-center">
                      <FaExternalLinkAlt href={isOpen.live} className="text-base text-neon" /> live project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;

