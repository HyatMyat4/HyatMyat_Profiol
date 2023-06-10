"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { fadeIn, textVariant } from "../../utils/motion";
function Section_1() {
  return (
    <div className=" w-full h-[910px] relative  flex flex-col  items-center justify-start">
      <div className="w-full h-full z-[-10] absolute flex flex-col items-center justify-center ">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src="/q-c3d7becf.webm"
        ></video>
        <div className="w-full h-[448px] bg-gradient-to-t from-black border border-[#7042f88b]  blur-sm  absolute bottom-[0px] rounded-[20px] "></div>
      </div>
      <div className="w-full h-auto flex flex-col z-[-2] items-center justify-center mt-[120px]">
        <motion.div
          variants={textVariant(0)}
          id="Wecom-box"
          className=" px-[15px] py-[4px]  border border-[#7042f88b] opacity-[0.9]  "
        >
          <SparklesIcon className="h-5 w-5 text-[#b49bff] mr-[10px]" />
          <div id="Wecom-text">Joiner Full Stack Software Engineer</div>
        </motion.div>
        <motion.div
          variants={textVariant(1)}
          className=" text-[60px] font-medium mt-[10px]"
        >
          Think better with Next js 13
        </motion.div>
        <motion.div
          variants={textVariant(2)}
          className=" text-[20px] text-gray-200  mt-[10px]"
          id="cursive"
        >
          Never miss a note , idea or connection.
        </motion.div>
      </div>
    </div>
  );
}

export default Section_1;
