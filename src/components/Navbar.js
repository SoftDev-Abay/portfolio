import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="z-50 flex w-full backdrop-blur-md justify-between flex-row py-4 items-center px-10 top-0 bg-transparent sticky
    ">
      <div className="flex justify-between gap-4 ">
        <FaLinkedin className="text-2xl text-[#7e7e82] hover:text-neon" />
        <FaGithub className="text-2xl text-[#7e7e82] hover:text-neon" />
        <FaInstagram className="text-2xl text-[#7e7e82] hover:text-neon" />
      </div>
      <button className="text-[#0aff9d] text-xl pt-[8px] pb-[10px] px-[24px]  border-[#0aff9d] 
      border-[1px] rounded-md hover:bg-neon duration-500 ease-out hover:ease-in hover:text-black ">
        My resume
      </button>
    </nav>
  );
};

export default Navbar;
