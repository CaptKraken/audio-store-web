import Link from "next/link";
import React, { useState } from "react";

import link from "../lib/links";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { ModalContainer } from "./ModalContainer";

type NavLink = {
  text: String;
  link: String;
};

const profileLinks: NavLink[] = link.profileLinks;

// const profileLinks: NavLink[] = [
//   {
//     text: "View Profile",
//     link: "/me",
//   },
//   {
//     text: "My Wishlist",
//     link: "/wishlist",
//   },
//   {
//     text: "View Orders",
//     link: "/orders",
//   },
//   {
//     text: "Payment Method",
//     link: "/payments",
//   },
//   {
//     text: "Delivery Infomation",
//     link: "/delivery",
//   },
// ];

export const HeaderUser = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleToggleShow = () => {
    setShow(show ? false : true);
  };
  return (
    <div className="relative">
      <button
        onClick={handleToggleShow}
        className={
          "shrink-0 bg-green-400 hover:bg-green-300 transition-all h-10 w-10 rounded-full flex justify-center items-center p-2"
        }
      >
        <p className={"text-white text-lg font-semibold"}>U</p>
      </button>
      <div
        className={`${
          show ? "block" : "hidden"
        } absolute right-0 bg-slate-200 mt-4 py-2 rounded-md z-50`}
      >
        <div className={"p-4 flex gap-4 justify-center items-center"}>
          <div
            className={
              "w-12 h-12 bg-white flex justify-center items-center rounded-full"
            }
          >
            <p className={"text-lg font-semibold"}>U</p>
          </div>
          <div>
            <p className={"font-semibold text-lg"}>Song Kim</p>
            <p className={"text-gray-400"}>kimsong432@gmail.com</p>
          </div>
        </div>
        {/* thank god for bubbling events */}
        <ul className="flex flex-col" onClick={handleToggleShow}>
          {profileLinks &&
            profileLinks.map((item, i) => (
              <Link href={`${item.link}`} key={i} passHref>
                <a
                  className={
                    "hover:bg-white hover:font-medium w-full px-4 py-2 cursor-pointer transition-all duration-200"
                  }
                >
                  {item.text}
                </a>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};
