import type { Metadata } from "next";
import { AppProvider } from "@/features/core/providers/app-provider";
import "../globals.css";

export const metadata: Metadata = {
  title: "Suministros Eléctricos",
  description: "Principal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
