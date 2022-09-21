import React from "react";
import { SectionTitle } from "./SectionTitle";
import promotionIcon from "../public/icons/promotion-icon.png";
import Image from "next/image";

export const NewsLetter = () => {
  return (
    <div
      className={
        "bg-green-400 w-full flex justify-center lg:justify-between items-center text-white rounded-md max-h-64"
      }
    >
      <div className="flex flex-col w-full gap-8 p-4 ">
        <div>
          <SectionTitle>Join our newsletter and get...</SectionTitle>
          <p>
            Join our email subscription now to get updates on promotions and
            coupons.
          </p>
        </div>
        <form
          className={
            "bg-white w-full flex rounded p-2 border-2 border-transparent focus-within:border-green-900"
          }
        >
          <input
            type={"email"}
            placeholder={"Your email address"}
            className={"p-2 w-full outline-none text-black text-lg"}
          />
          <button
            className={
              "bg-green-400 px-6 py-2 rounded font-bold hover:bg-green-300"
            }
          >
            Subscribe
          </button>
        </form>
      </div>
      <div
        className={
          "hidden lg:flex w-2/3 justify-center items-center overflow-hidden"
        }
      >
        <div className={"-rotate-12 max-w-s w-96 scale-125"}>
          <Image
            src={promotionIcon}
            alt="promotion newsletter"
            width={1280}
            height={720}
            objectFit={"contain"}
          />
        </div>
      </div>
    </div>
  );
};
