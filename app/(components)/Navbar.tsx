import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Themechanges from "../(Theme-action)/Theme-changes";

function Navbar() {
  return (
    <div
      className="w-full h-[65px]  fixed shadow-lg   dark:shadow-[#2A0E61]/50  bg-slate-3
    00/30  dark:bg-[#03001417]   backdrop-blur-md "
    >
      <div className=" w-[1232px] h-full flex flex-row items-center justify-between m-auto ">
        <div className="w-auto h-auto flex flex-row items-center">
          <Image
            src={"/glaxy.png"}
            width={40}
            height={40}
            alt="Hyat Myat"
            className="  cursor-pointer  hover:animate-slowspin "
          />
          <span
            id="cursive"
            className=" font-bold text-black dark:text-gray-300  ml-[10px] "
          >
            Hyat Myat
          </span>
        </div>
        <div className=" w-[500px] h-full flex flex-row items-center justify-between">
          <div
            className="w-full h-auto flex flex-row items-center justify-between mr-[15px]  bg-[#03001422] border
             border-[#7042f861] px-[20px]
           py-[10px] rounded-full "
          >
            <span className="Nav_text flex flex-row group ">
              Courses
              <ChevronDownIcon className=" w-[18px] h-[18px] text-black dark:text-gray-300 translate-y-[2px] group-hover:text-[#0000009e] dark:group-hover:text-gray-50 ml-[10px]" />
            </span>
            <span className="Nav_text">Project</span>
            <span className="Nav_text relative  ">
              Resources
              <div className="w-[38px] h-[16px] border border-teal-500 absolute top-[-13px] flex flex-row items-center justify-center left-[-20px] text-[11px]  bg-[#BBF7D0] text-teal-800  font-bold rounded-full ">
                <span>New</span>
              </div>
            </span>
            <span className="Nav_text flex flex-row group ">
              More
              <ChevronDownIcon className=" w-[18px] h-[18px] text-black dark:text-gray-300 translate-y-[2px] group-hover:text-[#0000009e] dark:group-hover:text-gray-50 ml-[10px]" />
            </span>
          </div>
        </div>
        <div className=" flex flex-row items-center ">
          <div className=" text-black dark:text-gray-300 select-none hover:text-[#000000dc] dark:hover:text-gray-50 cursor-pointer mr-[20px] active:scale-90 transition-all duration-100 ">
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
