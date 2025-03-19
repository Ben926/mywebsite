import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Benjamin Koh | Personal Portfolio",
  description:
    "Benjamin is a software engineer based in Singapore. He is passionate about building products that make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={`${inter.className} relative h-[5000px] pt-20 sm:pt-20 bg-slate-50 dark:bg-black`}>
        <ActiveSectionContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
