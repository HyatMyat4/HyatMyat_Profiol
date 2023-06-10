import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./(Provider)/Provider";

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
        className={` bg-[#F1F1F1] dark:bg-[#030014]  transition_ ${inter.className}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
