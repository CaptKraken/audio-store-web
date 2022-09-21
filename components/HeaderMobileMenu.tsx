import Image from "next/image";
import React, { Dispatch } from "react";
import logo from "../public/logo.png";
import link from "../lib/links";
import Link from "next/link";
import { ModalContainer } from "./ModalContainer";
import { useRouter } from "next/router";

type MobileMenuProps = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderMobileMenu = ({ setOpen }: MobileMenuProps) => {
  // const router = useRouter();
  const navigationLinks = link.navigationLinks;
  return (
    <ModalContainer setOpen={setOpen}>
      <div
        className={"bg-white h-full w-2/3 max-w-xs flex flex-col items-center"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={"p-8 w-full max-w-xs"}>
          <Image src={logo} alt={"logo"} />
        </div>
        <nav className={"flex flex-col w-full"}>
          {navigationLinks &&
            navigationLinks.map((item, i) => (
              <Link href={`${item.link}`} key={i} passHref>
                <a
                  className={
                    "hover:bg-gray-300 hover:font-medium w-full px-4 py-2 cursor-pointer transition-all duration-200 text-lg"
                  }
                >
                  {item.text}
                </a>
              </Link>
            ))}
        </nav>
      </div>
    </ModalContainer>
  );
};
