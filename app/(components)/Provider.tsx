"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { store } from "../../Redux-store/Redux-store";
function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </ThemeProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}

export default Provider;
