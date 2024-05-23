import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

import { FaBookOpen } from "react-icons/fa6";

import SlideReveal from "../Framer/SlideReveal";
import Reveal from "../Framer/Reveal";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("global");

  const descriptionParagraphs = t("about.description", { returnObjects: true });
  const workStackItems = t("about.workStack.items", { returnObjects: true });
  const funStackItems = t("about.funStack.items", { returnObjects: true });

  return (
    <div className="flex relative justify-center ">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="flex justify-between items-center gap-8">
          <Reveal>
            <h1
              className="text-[#ebecf3] max-md:text-6xl text-6xl font-extrabold 
              tracking-tighter relative z-20 "
            >
              About<span className="text-neon">.</span>
            </h1>
          </Reveal>

          <hr className="border-t-0 border-b w-full border-b-[#adadad]" />
        </div>
        <div className="grid grid-cols-about-grid-structure gap-10 mt-[34px] max-md:grid-cols-1">
          <div>
            <div className="flex flex-col  text-[#c0c1c7] text-xl  relative z-20 mb-8">
              <SlideReveal
                childrenWidth="fit-content"
                childrenOverflow="hidden"
              >
                <p
                  className="first-letter:leading-10 first-letter:mr-1 
            first-letter:float-left first-letter:rounded-md first-letter:bg-[#232323] 
            first-letter:py-2 first-letter:px-2.5 first-letter:text-2xl first-letter:font-bold first-letter:text-[#ebecf3]"
                >
                  {descriptionParagraphs[0]}
                </p>
              </SlideReveal>

              <br />
              <SlideReveal
                childrenWidth="fit-content"
                childrenOverflow="hidden"
              >
                {descriptionParagraphs[1]}
              </SlideReveal>
              <br />
              <SlideReveal
                childrenWidth="fit-content"
                childrenOverflow="hidden"
              >
                {descriptionParagraphs[2]}
              </SlideReveal>
              <br />
              <SlideReveal
                childrenWidth="fit-content"
                childrenOverflow="hidden"
              >
                {descriptionParagraphs[3]}
              </SlideReveal>
            </div>
            <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
              <div className=" flex items-center gap-5 pt-1">
                <div className="flex items-center gap-3">
                  <p className="text-neon text-lg font-medium">My links </p>{" "}
                  <FaArrowRight className="text-neon font-light" />
                </div>
                <div className="flex justify-between gap-4 ">
                  <a
                    href="https://www.linkedin.com/in/abay-aliyev-238805259"
                    target="_blank"
                  >
                    <FaLinkedin className="text-2xl text-[#7e7e82] hover:text-neon cursor-pointer" />
                  </a>
                  <a href="https://github.com/SoftDev-Abay" target="_blank">
                    <FaGithub className="text-2xl text-[#7e7e82] hover:text-neon cursor-pointer" />
                  </a>
                  <a
                    href="https://www.instagram.com/longlive_abay/"
                    target="_blank"
                  >
                    <FaInstagram className="text-2xl text-[#7e7e82] hover:text-neon cursor-pointer" />
                  </a>
                </div>
              </div>
            </SlideReveal>
          </div>

          <div className="flex flex-col ">
            <SlideReveal>
              <div>
                <div className="flex gap-2 items-center ">
                  <FaCode className="text-neon text-2xl" />
                  <h1 className="text-slight-gray text-2xl font-bold ">
                    {t("about.workStack.title")}
                  </h1>
                </div>
                <div className="flex flex-wrap mt-6 gap-3">
                  {workStackItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#d6d7db] font-medium text-lg "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </SlideReveal>
            <SlideReveal>
              <div className="mt-10">
                <div className="flex gap-2 items-center ">
                  <FaBookOpen className="text-neon text-2xl" />
                  <h1 className="text-slight-gray text-2xl font-bold ">
                    {t("about.funStack.title")}
                  </h1>
                </div>
                <div className="flex flex-wrap mt-6 gap-3">
                  {funStackItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#d6d7db] font-medium text-lg "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </SlideReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
