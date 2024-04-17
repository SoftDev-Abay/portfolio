import React from "react";
import Job from "../components/Job";
import Reveal from "../Framer/Reveal";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n, ready } = useTranslation("global");

  if (!ready) return "loading translations...";

  const experienceItems = t("experince.items", { returnObjects: true });

  return (
    <div className="flex relative justify-center ">
      <div className="max-w-[1094px] px-[96px] min-w-[200px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="flex justify-between items-center gap-8">
          <Reveal>
            <h1
              className="text-[#ebecf3] max-md:text-6xl text-6xl font-extrabold 
        tracking-tighter relative z-20 "
            >
              Experience<span className="text-neon">.</span>
            </h1>
          </Reveal>

          <hr className="border-t-0 border-b w-full border-b-[#adadad]" />
        </div>
        <div className="flex flex-col mt-10 ">
          {experienceItems.map((job, index) => (
            <Job
              key={index + "job"}
              companyName={job.companyName}
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
