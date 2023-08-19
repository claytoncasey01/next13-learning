import "./globals.css";
// import NavMenu from "@/NavMenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
import NavMenu from "./NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextspace",
  description: "Simple Next13 app for learning purposes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
