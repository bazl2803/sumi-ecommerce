import React from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={inter.className}>{children}</div>;
};
