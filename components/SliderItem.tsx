import Image from "next/image";
import Link from "next/link";
import React from "react";

type PromoSlideType = {
  item: {
    productName: String;
    productDescription: String;
    link: String;
    imageUrl: String;
  };
};

const SliderItem = ({ item }: PromoSlideType) => {
  return (
    <div className={"flex justify-center bg-green-50"}>
      <div
        className={
          "w-full max-w-6xl flex justify-between flex-col-reverse sm:flex-row lg:p-6"
        }
      >
        <div
          className={
            "flex flex-col justify-center gap-2 md:gap-4 items-start py-4 px-4"
          }
        >
          <h3 className={"text-3xl sm:text-4xl md:text-5xl font-bold"}>
            {item.productName}
          </h3>
          <p className={"sm:text-lg md:text-xl text-slate-500"}>
            {item.productDescription}
          </p>

          <Link href={`${item.link}`} passHref>
            <a
              className={
                "cursor-pointer rounded bg-gray-900 hover:bg-gray-700 text-sm md:text-base px-4 py-2 text-white"
              }
            >
              View Product
            </a>
          </Link>
        </div>
        <div className={"flex justify-center items-center md:pb-8"}>
          <div
            className={"w-full h-full relative max-w-sm md:max-w-md max-h-64"}
          >
            <Image
              src={`${item.imageUrl}`}
              alt={"marshall major iii"}
              width="1080"
              height={"720"}
              objectFit={"contain"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
