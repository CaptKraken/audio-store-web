import Image from "next/image";
import Link from "next/link";
import React from "react";
import chevronRightIcon from "../../public/icons/chevron_right.png";

type CategoryProps = {
  category: { text: string; link: string; imageUrl: string };
};
export const CategoryCard = ({ category }: CategoryProps) => {
  const { text, link, imageUrl } = category;
  return (
    <div className={"bg-green-100 flex rounded-lg px-2 lg:px-4"}>
      <div className="max-w-xs flex-1 flex flex-col justify-evenly items-start text-gray-800 md:gap-4">
        <h4 className={"text-xl sm:text-2xl lg:text-3xl font-semibold"}>
          {text}
        </h4>
        <Link passHref href={`${link}`}>
          <a className="group flex items-center lg:text-lg hover:underline">
            <span>View More</span>
            <span className="group-hover:ml-2 transition-all flex justify-items-center">
              <Image
                alt="chevron right"
                src={chevronRightIcon}
                width={16}
                height={16}
              />
            </span>
          </a>
        </Link>
      </div>
      <div className={"flex-1 flex justify-items-center"}>
        <Image
          src={`${imageUrl}`}
          alt={text}
          width={"400"}
          height={"300"}
          objectFit={"contain"}
        />
      </div>
    </div>
  );
};
