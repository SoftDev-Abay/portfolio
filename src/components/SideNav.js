import { React, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { x: -10 },
  visible: {
    x: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -40 },
  visible: {
    x: 0,
    transition: {
      ease: "linear"
    },
  },
};

const SideNav = () => {
  return (
    <nav className="sticky   bg-black flex flex-col p-0 z-30">
      <motion.div
        className="fixed "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="h-[65px] w-full flex justify-center items-center mt-2"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <a href="#top">
            <div className="text-[#ebecf3]  rounded-md leading-none font-bold px-2.5 pt-2 pb-3 w-fit bg-[#111111]  text-2xl">
              A<span className="text-neon">.</span>
            </div>
          </a>
        </motion.div>
        <motion.div variants={item}>
          <a href="#about">
            <div className="w-[60px] mt-5 text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
              <a className="vertical-lr h-[60px]">About</a>
            </div>
          </a>
        </motion.div>
        <motion.div variants={item}>
          <a href="#projects">
            <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
              <a className="vertical-lr h-[60px]">Projets</a>
            </div>
          </a>
        </motion.div>
        <motion.div variants={item}>
          <a href="#experience">
            <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
              <a className="vertical-lr h-[60px]">Exp.</a>
            </div>
          </a>
        </motion.div>
        <motion.div variants={item}>
          <a href="#contact">
            <div className="text-xl text-center border-r-2 border-r-black py-4 text-[#747578] hover:text-[#d4d5db] hover:bg-[#111111] hover:border-r-2 hover:border-[#0aff9d]">
              <a href="#contact" className="vertical-lr h-[60px]">
                Contact
              </a>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default SideNav;
