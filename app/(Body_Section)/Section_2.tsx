import React from "react";
import Image from "next/image";
function Section_2() {
  return (
    <div className=" w-full h-[910px]  flex flex-row items-center justify-between">
      <div className=" w-[48%] h-full flex flex-col  items-start  justify-center ">
        <span className=" text-sm px-[15px] animate-slideleft py-[5px] rounded-full bg-[#EAE9F5] dark:bg-[#1A1D3E] border-t-2 border-t-slate-400/50 hover:scale-105 transition-all  duration-150 cursor-pointer ">
          200+ Software Engineers Use My Npm Package
        </span>
        <div className="  w-auto h-auto  animate-slideleftT2 mt-[24px]  ">
          <span className="  text-[57px] font-bold align-top ">
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
          </span>
          <span className=" translate-y-[-20px]  animate-slideleftT2 text-[57px] font-bold   align-top ">
            learning experience
          </span>
        </div>
        <p className=" animate-slideleftT3 text-[19px] text-slate-400 mb-[20px]  ">
          All the best and most modern resources at your fingertips. Access
          online
          {/*--->a*/}
          <a className="Home_a ">Website</a>,{/*--->a*/}
          <a className="Home_a">Mobile</a>,{/*--->a*/}
          <a className="Home_a">Software</a>, coding examples, tutorials and
          much more. All in one place
        </p>
        <div className=" animate-slideleftT4 px-[20px] py-[7px] bg-sky-500 cursor-pointer active:scale-95 transition-all duration-100 select-none rounded-[5px]">
          Start learing Now!
        </div>
      </div>
      <div className=" w-[52%] h-full flex flex-row items-center justify-between ">
        <Image
          src="/mainIconsdark.svg"
          width={708}
          height={709}
          alt=""
          className="  hidden dark:flex animate-slideright2  transition_"
        />
        <Image
          src="/mainIcons.svg"
          width={708}
          height={709}
          alt=""
          className=" flex dark:hidden   animate-slideright2 transition_ "
        />
      </div>
    </div>
  );
}

export default Section_2;
