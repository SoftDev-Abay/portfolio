import React from "react";
import logo from "../img/logo.png";
const SideNav = () => {
  return (
    <nav className="sticky   bg-black flex flex-col p-0 z-30">
      <div className="fixed ">
        <div className="h-[65px] w-full flex justify-center items-center mt-2">
          <a href="#top">
            <div className="text-[#ebecf3]  rounded-md leading-none font-bold px-2.5 pt-2 pb-3 w-fit bg-[#111111]  text-2xl">
              A<span className="text-neon">.</span>
            </div>
          </a>
          {/* <img
            className="ml-auto mr-auto mt-5"
            width={40}
            height={40}
            src={logo}
            alt=""
          /> */}
        </div>
        <a href="#about">
          <div className="w-[60px] mt-5 text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
            <a className="vertical-lr h-[60px]">About</a>
          </div>
        </a>
        <a href="#projects">
          <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
            <a className="vertical-lr h-[60px]">Projets</a>
          </div>
        </a>
        <a href="#experience">
          <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
            <a className="vertical-lr h-[60px]">Exp.</a>
          </div>
        </a>
        <a href="#contact">
          <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
            <a href="#contact" className="vertical-lr h-[60px]">
              Contact
            </a>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default SideNav;
