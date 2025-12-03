import React from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={clsx(inter.className)}>
      {children}
    </div>
  );
};
