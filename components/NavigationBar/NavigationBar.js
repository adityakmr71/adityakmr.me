import React from "react";
import { GiAllSeeingEye } from "react-icons/gi";
const NavigationBar = () => {
  return (
    <div className="w-screen h-16 px-8 flex-auto flex items-center justify-around flex-row  bg-white">
      <div className="flex-1">
        <p>ADITYA KUMAR</p>
      </div>
      <div className="flex-2 pr-10">
        <a className="px-2">About;</a>
        <a className="px-2">Projects;</a>
        <a className="px-2">Contacts;</a>
      </div>
      <div className="absolute right-11 ">
        <GiAllSeeingEye size={40} />
      </div>
    </div>
  );
};

export default NavigationBar;
