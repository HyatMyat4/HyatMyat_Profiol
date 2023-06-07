import React from "react";
import Image from "next/image";
function Home_Body() {
  return (
    <div className=" w-[1250px] h-auto m-auto ">
      <div className=" w-full h-[910px]  flex flex-row items-center justify-between">
        <div className=" w-[48%] h-full flex flex-col  items-start  justify-center ">
          <span className=" text-sm px-[15px] py-[5px] rounded-full bg-[#1A1D3E] border-t-2 border-t-slate-400/50 hover:scale-105 transition-all  duration-150 cursor-pointer ">
            3,600+ Software Engineers use my npm
          </span>
          <h1 className="  text-[57px] font-bold mt-[24px] align-top ">
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
          </h1>
          <h1 className=" text-[57px] font-bold  translate-y-[-18px] align-top ">
            learning experience
          </h1>
          <p className=" text-xl text-slate-400 mb-[20px]  ">
            All the best and most modern resources at your fingertips. Access
            online
            {/*--->a*/}
            <a className="Home_a ">Website</a>,{/*--->a*/}
            <a className="Home_a">Mobile</a>,{/*--->a*/}
            <a className="Home_a">Software</a>, coding examples, tutorials and
            much more. All in one place
          </p>
          <div className=" px-[20px] py-[7px] bg-sky-500 cursor-pointer active:scale-95 transition-all duration-100 select-none rounded-[5px]">
            Start learing Now!
          </div>
        </div>
        <div className=" w-[52%] h-full flex flex-row items-center justify-between ">
          <Image src="/mainIconsdark.svg" width={708} height={709} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home_Body;

//<Image src="/mainIcons.svg" width={708} height={709} alt="" />
