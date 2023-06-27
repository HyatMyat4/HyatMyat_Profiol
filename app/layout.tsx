import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./(Provider)/Provider";
import Navbar from "./(Nav_components)/Navbar";
import StarsCanvas from "./(StarMode)/Background_Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Htet Myat",
  description: "Htet Myat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` bg-[#030014] overflow-y-scroll overflow-x-hidden  transition_ ${inter.className}`}
      >
        <Provider>
          <StarsCanvas />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
