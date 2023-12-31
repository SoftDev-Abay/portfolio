import React from "react";
import SlideReveal from "../Framer/SlideReveal";
import Reveal from "../Framer/Reveal";

const Hero = () => {
  const dots = [];
  for (let i = 0; i < 450; i++) {
    dots.push(
      <div
        className=" rounded-lg w-6 duration-150 ease-out hover:ease-in  
       hover:bg-[#555555] h-7 flex items-center justify-center group"
      >
        <div className="rounded-full group-hover:to-neon w-2 h-2 bg-gradient-to-b from-[#131313] to-[#525252]  "></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex relative justify-center h-screen items-center ">
        <div className="relative flex flex-col max-w-[902px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] max-xl:mr-0 xl:mr-[200px]">
          <Reveal>
            <h1 className="text-[#ebecf3] max-md:text-6xl text-8xl font-extrabold tracking-tighter relative z-20 mb-7">
              Hey, I'm Abay<span className="text-neon">.</span>
            </h1>
          </Reveal>
          <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
            <h3 className="text-4xl  font-normal text-[#ebecf3] relative z-20">
              I'm a{" "}
              <span className="font-bold text-neon">Full Stack Developer</span>
            </h3>
          </SlideReveal>
          <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
            <p className="mt-[24px] text-[#c0c1c7] text-lg relative z-20">
              I've spent the last 2 years building some pretty cool websites. I
              also play ping-pong and tennis (incase you've got spare time to
              play🏓). Let's connect!
            </p>
          </SlideReveal>
          <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
            <a href="#contact">
              <button className="mt-[24px] rounded-md py-[10px] px-[22px] bg-neon text-xl relative z-20">
                Contact me
              </button>
            </a>
          </SlideReveal>
          <div
            className="absolute flex flex-wrap w-[600px] h-[560px] max-[760px]:w-full  max-[760px]:right-0 
       max-lg:right-[50px] right-[0px] top-[-100px] z-10 overflow-hidden  max-[580px]:right-[0px]"
          >
            {dots}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
