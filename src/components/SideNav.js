import React from "react";
import logo from "../img/logo.png";
const SideNav = () => {
  return (
    <nav className="sticky   bg-black flex flex-col p-0 z-30">
      <div className=" h-[65px] w-full">
        <img className="ml-auto mr-auto mt-5" width={40} height={40} src={logo} alt="" />
      </div>
      <div className="mt-5 text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
        <a href="#about" className="vertical-lr h-[60px]">
          About
        </a>
      </div>
      <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
        <a href="#projects" className="vertical-lr h-[60px]">
          Projets
        </a>
      </div>
      <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
        <a href="#experience" className="vertical-lr h-[60px]">
          Exp.
        </a>
      </div>
      <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
        <a href="#contact" className="vertical-lr h-[60px]">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default SideNav;
