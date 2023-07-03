"use client";
import React from "react";
import AuthButtons from "../Auth/page";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { set_Signup } from "../../Redux-store/Redux-action";
import { useDispatch } from "react-redux";
function SignupProvider() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full bg-black/80  backdrop-blur-sm fixed z-[999] inset-0 flex flex-col items-center  justify-start  ">
      <div className="w-full h-[70px] px-[20px] flex flex-row items-center justify-start ">
        <div
          onClick={() => dispatch(set_Signup(false))}
          className="flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-6 w-6  mr-[5px] " />
          <span className=" text-[17px]">Back</span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center px-[10px] ">
        <AuthButtons
          AuthImage={"/fb.webp"}
          AuthName={"Sign up with Facebook"}
          providers_Name={"facebook"}
        />
        <AuthButtons
          AuthImage={"/5296765_camera_instagram_instagram logo_icon.png"}
          AuthName={"Sign up with Instagram"}
          providers_Name={"instagram"}
        />
        <AuthButtons
          AuthImage={"/google.png"}
          AuthName={"Sign up with Google"}
          providers_Name={"google"}
        />
        <AuthButtons
          AuthImage={"/gitwhite.png"}
          AuthName={"Sign up with Github  "}
          providers_Name={"github"}
        />
      </div>
    </div>
  );
}

export default SignupProvider;

/*
      <AuthButtons
          AuthImage={"/5296765_camera_instagram_instagram logo_icon.png"}
          AuthName={"Sign up with Instgram  "}
          providers_Name={"instgram"}
        />
*/
