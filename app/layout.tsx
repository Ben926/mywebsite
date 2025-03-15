import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Benjamin Koh | Personal Portfolio",
  description:
    "Benjamin is a software engineer based in Singapore. He is passionate " +
    "about building products that make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative`}>
        <div className="bg-indigo-100 absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem]"></div>
        <div className="bg-sky-100 absolute top-[-1rem] -z-10 
        left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
        dark:bg-[#676394]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
