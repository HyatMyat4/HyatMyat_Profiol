import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
function Navbar() {
  return (
    <div className="w-full h-[52px] sticky top-0 shadow-lg shadow-teal-600/50 backdrop-blur-md bg-[#1D293E] opacity-[0.8] ">
      <div className=" w-[1232px] h-full flex flex-row items-center justify-between m-auto ">
        <div className="w-auto h-auto flex flex-row items-center">
          <Image
            src={"/chatgpt.png"}
            width={40}
            height={40}
            alt="Hyat Myat"
            className=" animate-Fastspin cursor-pointer  hover:animate-slowspin "
          />
          <span id="cursive" className=" font-bold text-gray-300  ml-[10px] ">
            Hyat Myat
          </span>
        </div>
        <div className=" w-[500px] h-full flex flex-row items-center justify-between">
          <span className="Nav_text flex flex-row group ">
            Courses
            <ChevronDownIcon className=" w-[18px] h-[18px] text-gray-300 translate-y-[2px] group-hover:text-gray-50 ml-[10px]" />
          </span>
          <span className="Nav_text">Project</span>
          <span className="Nav_text relative  font-bold ">
            Resources
            <div className="w-[38px] h-[16px] border border-teal-500 absolute top-[-13px] flex flex-row items-center justify-center left-[-20px] text-[11px]  bg-[#BBF7D0] text-teal-800  font-bold rounded-full ">
              <span>New</span>
            </div>
          </span>
          <span className="Nav_text flex flex-row group ">
            More
            <ChevronDownIcon className=" w-[18px] h-[18px] text-gray-300 translate-y-[2px] group-hover:text-gray-50 ml-[10px]" />
          </span>
        </div>
        <div className=" flex flex-row items-center ">
          <div className=" text-gray-300 select-none hover:text-gray-50 cursor-pointer mr-[20px] active:scale-90 transition-all duration-100 ">
            <span>Sign in</span>
          </div>
          <div
            className="px-[16px] py-[5px] bg-sky-500 select-none active:scale-90 transition-all duration-100 font-semibold rounded-[8px] text-white 
            cursor-pointer hover:bg-sky-600  "
          >
            <span>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
