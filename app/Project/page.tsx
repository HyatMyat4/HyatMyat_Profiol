import React from "react";
import Input from "./Input";
import ActiveNav from "./ActiveNav";
import Projectpagebody from "./Projectpagebody";
function Project() {
  return (
    <div className=" w-full 1300:w-[1260px] h-auto flex flex-col items-center justify-start m-auto px-[5px] 400:px-[10px] 600:px-[15px] 1300:px-0  ">
      <div className="w-full h-[100px] flex flex-row items-center justify-between   border-b border-[#7042f850] mt-[66px] ">
        <div className="w-auto h-full hidden 420:flex flex-row items-center  ">
          <span className=" text-gray-200 font-bold text-[27px]">Projects</span>
        </div>
        <div className="w-full 420:w-auto h-auto mx-[5px] 420:mx-0">
          <Input />
        </div>
      </div>
      <ActiveNav />
      <Projectpagebody />
    </div>
  );
}

export default Project;
