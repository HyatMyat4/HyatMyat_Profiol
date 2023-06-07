"use client";
import React from "react";

import { useTheme } from "next-themes";

import { useState, useEffect } from "react";

import { MoonIcon } from "@heroicons/react/24/outline";

function Themechanges() {
  const [mounted, setmounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <div
          onClick={() => setTheme("light")}
          className=" p-[13px] rounded cursor-pointer animate-slowfade mt-[2px]   hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f] "
        >
          <MoonIcon className="text-[20px] hover:scale-110 transition-all  duration-100" />
        </div>
      ) : (
        <div
          onClick={() => setTheme("dark")}
          className=" p-[13px] rounded cursor-pointer mt-[2px] animate-slowfade   hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f] "
        >
          <MoonIcon className=" text-[20px] hover:scale-110 transition-all  duration-100" />
        </div>
      )}
    </div>
  );
}

export default Themechanges;
