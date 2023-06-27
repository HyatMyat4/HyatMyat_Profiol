"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { store } from "../../Redux-store/Redux-store";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <motion.section
          // @ts-ignore
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {children}
        </motion.section>
      </ReduxProvider>
    </SessionProvider>
  );
}

export default Provider;
