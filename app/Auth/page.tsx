"use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
interface Props {
  AuthImage: string;
  AuthName: string;
  providers_Name: string;
}
function AuthButtons({ AuthImage, AuthName, providers_Name }: any) {
  return (
    <div
      key={providers_Name}
      onClick={() =>
        signIn(providers_Name, { callbackUrl: "https://hyat-myat.vercel.app/" })
      }
      id="button-primary"
      className=" w-full 420:w-[380px] p-[10px]  h-[60px] mt-[20px] flex 225:inline flex-row items-center justify-center select-none cursor-pointer rounded-[10px] 225:pl-[20px] "
    >
      <div className="w-auto h-full flex flex-row items-center ">
        <div className=" w-[40px] h-[40px] ">
          <Image src={AuthImage} width={40} height={40} alt={providers_Name} />
        </div>

        <span className=" W-0 225:w-[200px] text-gray-200 hidden 225:flex h-full  flex-row  items-center justify-start ml-[13px]  350:ml-[20px] text-[15px] 350:text-[18px] font-normal 350:font-medium mr-[18px]">
          {AuthName}
        </span>
      </div>
    </div>
  );
}

export default AuthButtons;
