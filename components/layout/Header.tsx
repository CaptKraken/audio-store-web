import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import { HeaderCart } from "../HeaderCart";
import { HeaderDesktopNav } from "../HeaderDesktopNav";
import { HeaderSearchBar } from "../HeaderSearchBar";
import { HeaderUser } from "../HeaderUser";
import { MobileMenuBtn } from "../MobileMenuBtn";
export const Header = () => {
  return (
    <header className={"w-full max-w-7xl px-4 mt-4"}>
      <div className="flex gap-4 justify-between items-center w-full max-w-7xl">
        <div className={"block md:hidden"}>
          <MobileMenuBtn />
        </div>
        <div className={"w-28 flex justify-center"}>
          <Image src={logo} alt="logo" className={"object-contain"} />
        </div>
        <div className={"hidden md:block w-full"}>
          <HeaderSearchBar />
        </div>
        <div className={"flex gap-1 "}>
          <HeaderCart />
          <HeaderUser />
        </div>
      </div>
      <div className={"md:hidden mt-4"}>
        <HeaderSearchBar />
      </div>
      <HeaderDesktopNav />
    </header>
  );
};
