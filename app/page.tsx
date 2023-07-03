"use client";
import Home_Body from "./(Home_Body)/Home_Body";
import Footer from "./(Footer)/Footer";
import { Signup_data } from "../Redux-store/Redux-action";
import { useSelector } from "react-redux";
export default function Home() {
  const Signup = useSelector(Signup_data);
  return (
    <main
      className={`w-full    ${
        Signup ? " h-[940px] overflow-hidden" : "  h-screen "
      }   `}
    >
      <Home_Body />
      <Footer />
    </main>
  );
}
