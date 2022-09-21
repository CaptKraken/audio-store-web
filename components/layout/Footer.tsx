import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import { categories, brands, about } from "../../lib/links";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer
      className={
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl px-4 py-4 "
      }
    >
      <div className={"flex flex-col gap-2 md:max-w-xs"}>
        <div className={"w-28 flex justify-center mb-4"}>
          <Image src={logo} alt="logo" className={"object-contain"} />
        </div>
        <div>
          <p className={"font-semibold text-xl"}>+855 12 366 486</p>
          <p className={"text-gray-400"}>Mon-Sun 07:00am-08:00pm</p>
        </div>
        <div>
          <p className={"font-semibold text-xl"}>Address</p>
          <p className={"text-gray-400"}>
            រាជធានី, សង្កាត់​បឹង​កេងកង​៣ ខណ្ឌ​ចំការ​មន, St 113, Phnom Penh 12304
          </p>
        </div>
        <div>
          <p className={"font-semibold text-xl"}>E-Mail</p>
          <p className={"text-gray-400"}>order@audio.store</p>
        </div>
      </div>
      <div>
        <h3 className={"text-2xl font-bold mb-4"}>Categories</h3>
        <ul className={"flex flex-col gap-2 items-start"}>
          {categories &&
            categories.map((item, i) => (
              <Link key={i} href={`${item.link}`} passHref>
                <a
                  className={
                    "hover:underline text-gray-400 hover:text-black cursor-pointer text-lg"
                  }
                >
                  {item.text}
                </a>
              </Link>
            ))}
        </ul>
      </div>
      <div>
        <h3 className={"text-2xl font-bold mb-4"}>Brands</h3>
        <ul className={"flex flex-wrap gap-2 max-w-xs items-start"}>
          {brands &&
            brands.map((item, i) => (
              <Link key={i} href={`${item.link}`} passHref>
                <a
                  className={
                    "hover:underline text-gray-400 hover:text-black cursor-pointer text-lg"
                  }
                >
                  {item.text}
                </a>
              </Link>
            ))}
        </ul>
      </div>
      <div>
        <h3 className={"text-2xl font-bold mb-4"}>About</h3>
        <ul className={"flex flex-col gap-2 items-start"}>
          {about &&
            about.map((item, i) => (
              <Link key={i} href={`${item.link}`} passHref>
                <a
                  className={
                    "hover:underline text-gray-400 hover:text-black cursor-pointer text-lg"
                  }
                >
                  {item.text}
                </a>
              </Link>
            ))}
        </ul>
      </div>
    </footer>
  );
};
