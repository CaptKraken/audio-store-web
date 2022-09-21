import React from "react";

import sadBag from "../public/icons/sad-bag.png";

import Link from "next/link";

import Image from "next/image";
export const Product404 = () => {
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center text-center`}
    >
      <div className={`max-w-xs`}>
        <Image src={sadBag} alt="sad bag" />
      </div>
      <h1 className={`text-2xl text-gray-500`}>Product not found.</h1>
      <p className={`text-lg text-gray-500`}>
        {`Unfortunately, we can't find the product right now.`}
      </p>
      <p className={`text-lg text-gray-500 mt-4 max-w-xl`}>
        {`Perhaps the URL is misspelled, you clicked on a broken link or we removed the page. In any case, if you have questions about our products, don't be afraid to `}
        <Link href={`/support`} passHref>
          <a className={`hover:underline text-green-600`}>contact us</a>
        </Link>
        {"."}
      </p>
      <div className={`my-8 flex gap-4`}>
        <Link href={`/`} passHref>
          <a
            className={`bg-green-500 px-4 py-3 text-white rounded font-medium hover:bg-green-400`}
          >
            Go to homepage
          </a>
        </Link>
        <Link href={`/shop`} passHref>
          <a
            className={`bg-green-500 px-4 py-3 text-white rounded font-medium hover:bg-green-400`}
          >
            Shop all products
          </a>
        </Link>
      </div>
    </div>
  );
};
