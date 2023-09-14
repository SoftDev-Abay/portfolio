import React from "react";

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
      <div className="flex relative justify-center ">
        <div className="flex flex-col max-w-[902px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] max-xl:mr-0 xl:mr-[200px]">
          <h1 className="text-[#ebecf3] max-md:text-6xl text-8xl font-extrabold tracking-tighter relative z-20">
            Hey, I'm Abay<span className="text-neon">.</span>
          </h1>
          <h3 className="text-4xl mt-7 font-normal text-[#ebecf3] relative z-20">
            I'm a{" "}
            <span className="font-bold text-neon">Full Stack Developer</span>
          </h3>
          <p className="mt-[24px] text-[#c0c1c7] text-lg relative z-20">
            I've spent the last 5 years building and scaling software for some
            pretty cool companies. I also teach people to paint online (incase
            you've got an empty canvas layin' around 🎨). Let's connect!
          </p>
          <div>
            <button className="mt-[24px] rounded-md py-[10px] px-[22px] bg-neon text-xl relative z-20">
              Contact me
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute flex flex-wrap w-[600px] h-[560px] max-sm:w-[500px] max-sm:right-0 max-sm:left-0 
       max-lg:right-[50px] right-[100px] top-[90px] z-10 overflow-hidden"
      >
        {dots}
      </div>
    </>
  );
};

export default Hero;
