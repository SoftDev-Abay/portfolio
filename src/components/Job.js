import React from "react";
import SlideReveal from "../Framer/SlideReveal";

const Job = ({ companyName, position, location, date, text, tech }) => {
  return (
    <div className="mt-7 flex flex-col border-b border-[#2e2e2e] pb-5 px-3">
      <div className="flex justify-between">
        <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
          <span className="text-[#ebecf3] text-2xl font-extrabold ">
            {companyName}
          </span>
        </SlideReveal>
        <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
          <span className="text-[#d6d7db] font-medium text-lg">{date}</span>
        </SlideReveal>
      </div>
      <div className="flex justify-between mt-3.5">
        <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
          <span className="text-neon text-lg font-bold">{position}</span>
        </SlideReveal>
        <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
          <span className="text-[#d6d7db] font-medium text-lg">{location}</span>
        </SlideReveal>
      </div>
      <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
        <p className="text-[#c0c1c7] text-xl mt-3.5 mb-6">{text}</p>
      </SlideReveal>
      <SlideReveal childrenWidth="fit-content" childrenOverflow="hidden">
        <div className="flex flex-wrap gap-3  px-1">
          {tech.map((techName) => (
            <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
              {techName}
            </div>
          ))}
        </div>
      </SlideReveal>
    </div>
  );
};

export default Job;
