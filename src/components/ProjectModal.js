import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt, FaCross } from "react-icons/fa";

const ProjectModal = ({ isOpen, modalHandlier }) => {
  console.log(isOpen);
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed w-full h-full left-0 top-0 z-[10000] bg-black  overflow-auto bg-transparent backdrop-blur-md">
            {/* sand box */}
            <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center "></div>
            {/* modal box */}
            <div
              className="z-[10000] relative w-[80%] max-w-[850px]  my-[100px] mx-auto bg-transparent
            
            "
            >
              <div className="flex flex-col bg-[#232323] rounded-xl">
                <div className="relative overflow-hidden rounded-t-xl bg-[#232323] ">
                  <img
                    className=" rounded-t-lg relative object-fill sm:min-h-[350px] max-[400px]:object-contain  "
                    src={isOpen.imgUrl}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center gap-3 mt-5">
                    <h1
                      className="text-[#ebecf3] text-4xl font-extrabold max-sm:text-2xl
           relative z-20 "
                    >
                      {isOpen.name}
                    </h1>
                  </div>
                  <p className="text-neon text-lg font-medium mt-3.5 max-sm:text-base">
                    {isOpen.tech}
                  </p>
                  <p className="text-[#c0c1c7] text-lg mt-5 whitespace-pre-line max-sm:text-sm ">
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
                      <a
                        href=""
                        className="gap-2 flex text-neon font-medium text-base items-center"
                      >
                        <FaGithub
                          href={isOpen.github}
                          className="text-base text-neon"
                        />{" "}
                        source code
                      </a>
                      <a
                        href={isOpen.live}
                        className="gap-2 flex text-neon font-medium text-base items-center"
                      >
                        <FaExternalLinkAlt
                          href={isOpen.live}
                          className="text-base text-neon"
                        />{" "}
                        live project
                      </a>
                    </div>
                  </div>

                  <div
                    className="absolute top-3 right-3 cursor-pointer z-[301] flex justify-end w-full"
                    onClick={() => {
                      modalHandlier(false);
                    }}
                  >
                    <AiOutlineClose className="text-slate-gray text-xl font-extrabold mr-4 max-[440px]:mr-[10%] max-[402px]:mr-[30%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectModal;
