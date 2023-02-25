import { Inter } from "@next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const IntroMainContent = () => {
  return (
    <div className={inter.className}>
      <p className="text-6xl">
        Hey! I am Aditya Kumar, a Software Developer with years of experience. I
        develop websites and mobile applications for projects related to any
        domain. I write clean code 😎.
      </p>
    </div>
  );
};

export default IntroMainContent;
