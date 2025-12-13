import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import {
  FaLanguage,
  // icon similar to select arrow down
  FaAngleDown,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const languages = ["Eng", "Rus"];

  const { t, i18n } = useTranslation("global");

  const [toggleOpen, setToggleOpen] = useState(false);

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const toggleLanguage = () => {
    setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  useEffect(() => {
    i18n.changeLanguage(languages[currentLanguageIndex].toLowerCase());
  }, [currentLanguageIndex]);

  return (
    <div className="z-[1000] fixed right-7 bottom-5">
      <div className="relative">
        <div
          className="  bg-[#2e2e2e] text-[#0aff9dc4]  cursor-pointer  flex justify-center items-center gap-2 px-2 py-1 rounded-md"
          onClick={() => {
            toggleLanguage();
          }}
        >
          <span className="font-semibold">
            {languages[currentLanguageIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
