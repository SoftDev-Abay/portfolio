import React from "react";
import { FaEnvelope } from "react-icons/fa";
import SlideReveal from "../Framer/SlideReveal";
import Reveal from "../Framer/Reveal";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n, ready } = useTranslation("global");

  if (!ready) return "loading translations...";

  const descriptionParts = t("contact.description", { returnObjects: true });

  return (
    <div className="flex relative justify-center items-center h-[500px] mb-[200px]">
      <div className="max-w-[1094px] px-[96px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="max-w-[700px]">
          <Reveal>
            <h1 className="text-[#ebecf3] max-md:text-6xl text-8xl text-center font-extrabold  relative z-20 mb-7">
              Contact<span className="text-neon">.</span>
            </h1>
          </Reveal>
          <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
            <p className="text-center text-[#c0c1c7] text-xl ">
              {descriptionParts[0]}{" "}
              <a
                href="https://www.linkedin.com/in/abay-aliyev-238805259"
                target="_blank"
                className="text-neon"
              >
                {" "}
                Linkedin
              </a>{" "}
              {descriptionParts[1]}{" "}
              <a
                href="https://www.instagram.com/longlive_abay/"
                target="_blank"
                className="text-neon"
              >
                Instagram
              </a>{" "}
              {descriptionParts[2]}
            </p>
          </SlideReveal>
          <p className="flex justify-center text-center mt-5 font-bold text-[#dadbe0] text-2xl">
            <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
              <a
                href="mailto:abay.aliev.03@gmail.com"
                className="flex gap-2 text-center hover:text-neon"
              >
                {" "}
                <FaEnvelope className="text-xl relative top-2.5" />{" "}
                abay.aliev.03@gmail.com
              </a>
            </SlideReveal>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
