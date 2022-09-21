import { AppProps } from "next/app";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={"layout"}>
      <div className={"flex justify-center items-center w-full max-h-32"}>
        <Header />
      </div>
      <main className={"flex justify-center"}>
        <div className={"w-full max-w-7xl px-4"}>{children}</div>
      </main>
      <div className={"mt-auto mb-8 flex justify-center w-full"}>
        <Footer />
      </div>
    </div>
  );
};
