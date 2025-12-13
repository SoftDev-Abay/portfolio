import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("global");

  const resumeURL =
    t("navbar.resumeName") === "resume_en"
      ? "https://drive.google.com/file/d/1hJP1LYRzSPevzDIZllY5LSQHU8a7wzKb/view?usp=sharing"
      : "https://drive.google.com/file/d/15f_R_fM2iHvri__4cQWs94M9RTYDuWKU/view?usp=sharing";
  return (
    <nav
      className="z-[1000] flex w-full backdrop-blur-md justify-between flex-row py-4 items-center px-10 top-0 bg-transparent sticky
    "
    >
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
        <a href="https://www.instagram.com/longlive_abay/" target="_blank">
          <FaInstagram className="text-2xl text-[#7e7e82] hover:text-neon cursor-pointer" />
        </a>
      </div>
      <button
        className="text-[#0aff9d] text-xl 
        pt-[8px] pb-[10px] px-[22px]  
        border-[#0aff9d] 
      border-[1px] rounded-md 

       
      hover:text-black z-[60] relative ease-in-out duration-150
      before:z-[9]
      before:content-[' '] before:absolute before:bg-neon before:border-neon
      before:top-0 before:left-0 before:w-[0%] before:h-[0%] before:rounded-l-md 
      before:transition-all before:duration-200 before:ease-in-out
      hover:before:rounded-md hover:before:w-full hover:before:h-full
      "
      >
        <a
          // href={`/assets/${t("navbar.resumeName")}`}
          href={resumeURL}
          target="_blank"
          className="relative z-10"
        >
          {t("navbar.button")}
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
