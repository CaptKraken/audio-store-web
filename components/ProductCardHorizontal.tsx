import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Product = {
  product: {
    name: string;
    price: number;
    slug: string;
    images: string[];
  };
};

export const ProductCardHorizontal = ({ product }: Product) => {
  const [current, setCurrent] = useState(0);
  const goToNext = () => {
    setCurrent(current === product.images.length - 1 ? 0 : current + 1);
  };

  const goToPrevious = () => {
    setCurrent(current === 0 ? product.images.length - 1 : current - 1);
  };
  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    //max-w-screen-2xs
    <div
      className={
        "min-w-fit w-full rounded-md bg-white min-h-full flex flex-col justify-between"
      }
    >
      <div className={"px-4"}>
        <div className={"mb-2 relative group"}>
          {product.images &&
            product.images.map((imageUrl, i) => {
              const isCurrent: boolean = current === i;
              return (
                <div
                  key={imageUrl}
                  className={`${
                    isCurrent
                      ? "opacity-100 transition-all duration-700 scale-x-100"
                      : "opacity-0 transition-all duration-100 scale-95"
                  }`}
                >
                  {isCurrent && (
                    <Image
                      src={`${imageUrl}`}
                      alt={"marshall major iii"}
                      width="256"
                      height={"200"}
                      objectFit={"contain"}
                    />
                  )}
                </div>
              );
            })}
          <div className={"w-full flex justify-center items-center gap-1"}>
            {product.images &&
              product.images.map((imageUrl, i) => {
                const isCurrent: boolean = current === i;
                return (
                  <button
                    onClick={() => goToSlide(i)}
                    aria-label={`go to slide ${i}`}
                    key={imageUrl}
                    className={`h-1 rounded-lg ${
                      isCurrent
                        ? "bg-green-400 opacity-100 transition-all duration-300"
                        : "bg-green-200 opacity-50 transition-all duration-300"
                    }`}
                    style={{
                      width: `${(100 / product.images.length).toFixed(2)}%`,
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-2 mt-4 px-4"}>
        <p className={"sm:text-lg text-xl"}>{product.name}</p>
        <p className={"text-lg font-bold"}>${product.price.toFixed(2)}</p>
      </div>
      <div className={"w-full p-2"}>
        <Link passHref href={`/products/${product.slug}`}>
          <a
            className={
              "group flex items-center justify-center px-4 py-1 rounded text-white font-medium bg-green-400 hover:bg-green-300"
            }
          >
            Shop
          </a>
        </Link>
      </div>
    </div>
  );
};
