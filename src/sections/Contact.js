import React from "react";
import { FaEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex relative justify-center items-center h-[500px] mb-[200px]">
      <div className="max-w-[1094px] px-[96px] max-md:px-[26px] md:px-[46px] lg:px-[96px] ">
        <div className="max-w-[700px]">
          <h1 className="text-[#ebecf3] max-md:text-6xl text-8xl text-center font-extrabold  relative z-20">
            Contact<span className="text-neon">.</span>
          </h1>
          <p className="text-center text-[#c0c1c7] text-xl mt-7">
            Shoot me an email if you want to connect! You can also find me on
            <a className="text-neon"> Linkedin</a> or{" "}
            <a className="text-neon">Twitter</a> if that's more your speed.
          </p>
          <p className="flex justify-center text-center mt-5 font-bold text-[#dadbe0] text-2xl">
            <a
              href="mailto:abay.aliev.03@gmail.com"
              className="flex gap-2 text-center hover:text-neon"
            >
              {" "}
              <FaEnvelope className="text-xl relative top-2.5" /> abay.aliev.03@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
