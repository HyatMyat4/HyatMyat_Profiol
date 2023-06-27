import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";
function page() {
  return (
    <div className=" pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] ">
      <div className=" w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <div className=" w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className=" text-gray-400 text-[14px]">Sat Mar 12 2022</div>
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hey ☘️, I&apos;m Htet Myat
        </div>
        <div className=" text-gray-300    animate-slideright ">
          When I was Start age 19 I found Programming began when I first learned
          to code with an html. As I explored the world of technology, I
          discovered web development and was captivated by the creativity and
          innovation involved in building online experiences.
        </div>
        <div>
          <div className="text-[20px]  my-[15px]  animate-slideright ">
            <span className="monospace">All i learning selfstudy from</span>
            <span className="text-rose-600"> youtube</span> ,
            <span className="text-emerald-500"> Google</span> ,
            <span className=" text-[#F48024]"> Stackoverflow</span>
          </div>
        </div>
        <div className="text-gray-300  animate-slideright">
          Fast-forward to today, and I have had the opportunity to work
          alongside proficient back-end developers and full-stack developers on
          the construction of real-world applications.
        </div>
        <div className=" text-gray-300  animate-slideright  ">
          <span className="monospace ">In my free time, I learing</span>
          <span className="text-sky-500"> Golang</span> ,
          <span className="text-yellow-500"> Gin </span>
          <span className="">
            For My Dream Mutiplayer Game Server and Backend Developments
          </span>
        </div>
        <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Development Experience ⏳
        </div>
        <div className="mt-4  animate-slideright    leading-[30px] monospace text-[16px] 800:text-[20px]">
          I&apos;m a skilled web developer with experience in{" "}
          <span className=" text-blue-500 ">TypeScript</span> and{" "}
          <span className=" text-yellow-500"> JavaScript</span>, and expertise
          in frameworks like <span className=" text-cyan-500">React</span>,{" "}
          <span className="  text-teal-500"> Node.js</span>, and
          <span className="text-[#433a74] "> Next js</span>. I&apos;m a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let&apos;s work together to bring your ideas to life!
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade  ">
          Website 🌏
        </div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
          I currently have over 1.4 Years experience With html , css , Tailwind
          css Javascript , Redux , Redux Tookit , ReactQuery , TypeScript , Next
          js 13 , Payment Stripe , Pusher
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Backend 🐳
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          Node js , Express js , TypeScript , Mongodb , Postger Sql , FireBase ,
          FireStore , Graphql , Payment Stripe , Basic Skill with Prisma ORM and
          Web Scoket , Webhook , Jwt authentication , Docker , Nigx
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade ">
          Mobile Application 📱
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          React Native CLI , React NAtive Expo + Next js , TypeScript ,
          ReduxTookit , Tailwind ,
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade ">
          Desktop Software 🪟🍎
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          Tauri With Next js 13 , TypeScript , Tailwind css , ReduxTookit
        </div>
        <Link
          href={"/Project"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          Go Back To
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Projects
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;
