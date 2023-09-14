import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaSmile,
  FaCode
} from "react-icons/fa";

const About = () => {
  return (
    <div className="flex relative justify-center ">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="flex justify-between items-center gap-8">
          <h1
            className="text-[#ebecf3] max-md:text-6xl text-6xl font-extrabold 
          tracking-tighter relative z-20 "
          >
            About<span className="text-neon">.</span>
          </h1>

          <hr className="border-t-0 border-b w-full border-b-[#adadad]" />
        </div>
        <div className="grid grid-cols-about-grid-structure gap-10 mt-[34px] max-md:grid-cols-1">
          <div>
            <div className="flex flex-col  text-[#c0c1c7] text-xl  relative z-20">
              <p
                className="first-letter:leading-10 first-letter:mr-1 
            first-letter:float-left first-letter:rounded-md first-letter:bg-[#232323] 
            first-letter:py-2 first-letter:px-2.5 first-letter:text-2xl first-letter:font-bold first-letter:text-[#ebecf3]"
              >
                Hey! I'm Bob, if you haven't already gathered that by now. I'm a
                painter turned software engineer from Daytona, Florida. I
                specialize in the backend, primarily Node and Rust, but love
                building with whatever tools are right for the job.
              </p>
              <br />
              I currently work for Google on Google Photos. I also toss in my ¢2
              with the design systems teams from time to time (once an artist,
              always an artist, amirite?).
              <br />
              <br />
              Outside of work, I still love to paint. Any given Sunday you'll
              find me scribbling some happy clouds with my son ☁️ I even teach
              courses online if you're looking to learn!
              <br />
              <br />
              I'm passively looking for new positions where I can merge my love
              for code with my love for the canvas. If you think you've got an
              opening that I might like, let's connect 🔗
            </div>
            <div className="mt-8 flex items-center gap-5">
              <div className="flex items-center gap-3">
                <p className="text-neon text-lg font-medium">My links </p>{" "}
                <FaArrowRight className="text-neon font-light" />
              </div>
              <div className="flex justify-between gap-4 ">
                <FaLinkedin className="text-2xl text-[#7e7e82] hover:text-neon" />
                <FaGithub className="text-2xl text-[#7e7e82] hover:text-neon" />
                <FaInstagram className="text-2xl text-[#7e7e82] hover:text-neon" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div>
            <div className="flex gap-2 items-center ">
              <FaCode className="text-neon text-2xl"/>
                <h1 className="text-slight-gray text-2xl font-bold ">
                  Use at work
                </h1>
              </div>
              <div className="flex flex-wrap mt-6 gap-3">
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#d6d7db] font-medium text-lg ">
                  Javascript
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  React
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  CSS
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  HTML
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  Javascript
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  Redux
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  GitHub
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  Git
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-2 items-center ">
              <FaSmile className="text-neon text-2xl"/>
                <h1 className="text-slight-gray text-2xl font-bold ">
                  Use for fun
                </h1>
              </div>
              <div className="flex flex-wrap mt-6 gap-3">
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#d6d7db] font-medium text-lg ">
                  Javascript
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  React
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  CSS
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  HTML
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  Javascript
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  Redux
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  GitHub
                </div>
                <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
                  Git
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
