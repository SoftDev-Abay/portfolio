import React from "react";
import { experience } from "../constants";
import Job from "../components/Job";

const Experience = () => {
  return (
    <div className="flex relative justify-center ">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="flex justify-between items-center gap-8">
          <h1
            className="text-[#ebecf3] max-md:text-6xl text-6xl font-extrabold 
        tracking-tighter relative z-20 "
          >
            Experience<span className="text-neon">.</span>
          </h1>

          <hr className="border-t-0 border-b w-full border-b-[#adadad]" />
        </div>
        <div className="flex flex-col mt-10 ">
          {experience.map((job) => (
            <Job
              key={job.date}
              compamyName={job.compamyName}
              position={job.position}
              location={job.location}
              date={job.date}
              text={job.text}
              tech={job.tech}
            />
          ))}
          <hr className="border-t-0 border-b w-full border-b-[#302f2f]" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
