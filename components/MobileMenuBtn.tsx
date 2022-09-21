import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import hamburgerIcon from "../public/icons/hamburger_menu.png";
import logo from "../public/logo.png";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { ModalContainer } from "./ModalContainer";
type DataType = {
  clicks: Number;
};

export const MobileMenuBtn = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [data, setData] = useState<DataType>({ clicks: 0 });

  const openMenu = () => setIsShown(true);
  const closeMenu = () => setIsShown(false);
  return (
    <div>
      <button
        onClick={openMenu}
        className={"w-10 h-10 bg-green-400 hover:bg-green-300 rounded p-1"}
      >
        <Image src={hamburgerIcon} alt="open menu" />
      </button>
      {isShown && <HeaderMobileMenu setOpen={setIsShown} />}
    </div>
  );
};
