import React from "react";

const Job = ({ compamyName, position, location, date, text, tech }) => {
  return (
    <div className="mt-7 flex flex-col border-b border-[#2e2e2e] pb-5 px-3">
      <div className="flex justify-between">
        <span className="text-[#ebecf3] text-2xl font-extrabold ">{compamyName}</span>
        <span className="text-[#d6d7db] font-medium text-lg">
          {date}
        </span>
      </div>
      <div className="flex justify-between mt-3.5">
        <span className="text-neon text-lg font-bold">{position}</span>
        <span className="text-[#d6d7db] font-medium text-lg">{location}</span>
      </div>
      <p className="text-[#c0c1c7] text-xl mt-3.5">
        {text}
      </p>

      <div className="flex flex-wrap gap-3 mt-6 px-1">
        {tech.map((techName) => (
          <div className="bg-[#232323] leading-none  rounded-xl pt-1.5 pb-2.5 px-2 text-[#c0c1c7] font-medium text-lg ">
            {techName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
