import React from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "./Technology_tag";
import { Project } from "../../utils/constants";
import Projectcard_Web from "./(ProjectCard)/Projectcard_Web";
import Projectcard_Mobile from "./(ProjectCard)/Projectcard_Mobile";
function Section_5() {
  return (
    <div className=" w-full 1300:w-[1250px] z-10 h-auto relative m-auto flex flex-col items-center justify-center overflow-hidden  pb-[100px] ">
      <div className=" w-full 840:w-[830px] 1250:w-full h-auto flex flex-col  items-start justify-center my-[15px] px-[15px] 1300:px-[10px] ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  font-semibold text-[20px] ">
          Projects
        </span>
        <span className=" font-bold text-[30px] text-white ">
          Featured Projects
        </span>
      </div>
      <div className=" w-full h-auto flex flex-row items-center justify-center  1250:justify-between flex-wrap p-[10px] 840:p-0  ">
        {Project.slice(0, 7).map((data: Project_data, index: any) =>
          data.Type === "React Native" ? (
            <Projectcard_Mobile
              key={data.title + data.project_image + index}
              index={index}
              data={data}
            />
          ) : (
            <Projectcard_Web
              key={data.title + data.project_image + index}
              index={index}
              data={data}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Section_5;
