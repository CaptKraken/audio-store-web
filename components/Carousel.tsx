import React, { useRef } from "react";

import { ProductCardHorizontal } from "../components/ProductCardHorizontal";
import { products } from "../lib/products";

import chevronRightIcon from "../public/icons/chevron_right.png";
import chevronLeftIcon from "../public/icons/chevron_left.png";
import Image from "next/image";
export const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onWheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    const scrollWidth = containerRef.current?.scrollWidth ?? 0;
    const scrollLeft = e.currentTarget.scrollLeft;
    const deltaY = e.deltaY;
    containerRef.current?.scroll({
      left:
        deltaY > 0
          ? scrollLeft + scrollWidth / 4
          : scrollLeft - scrollWidth / 4,
      behavior: "smooth",
    });
  };

  const handleSlideRight = () => {
    const scrollWidth = containerRef.current?.scrollWidth ?? 0;
    const scrollLeft = containerRef.current?.scrollLeft ?? 0;
    containerRef.current?.scroll({
      left: scrollLeft + scrollWidth / 4,
      behavior: "smooth",
    });
  };

  const handleSlideLeft = () => {
    const scrollWidth = containerRef.current?.scrollWidth ?? 0;
    const scrollLeft = containerRef.current?.scrollLeft ?? 0;
    containerRef.current?.scroll({
      left: scrollLeft - scrollWidth / 4,
      behavior: "smooth",
    });
  };
  return (
    <div className={"relative w-full max-w-7xl overflow-hidden"}>
      <div
        ref={containerRef}
        className={
          "w-full lg:max-w-7xl flex overflow-x-scroll p-4 no-scrollbar transition-all duration-500"
        }
        style={{ overscrollBehavior: "contain" }}
        onWheel={onWheelHandler}
      >
        {products &&
          products.map((product, i) => (
            <ProductCardHorizontal key={product.slug + i} product={product} />
          ))}
      </div>
      <div className={"flex gap-2"}>
        <button onClick={handleSlideLeft}>
          <Image
            alt="chevron right"
            src={chevronLeftIcon}
            width={28}
            height={28}
          />
        </button>
        <button onClick={handleSlideRight}>
          <Image
            alt="chevron right"
            src={chevronRightIcon}
            width={28}
            height={28}
          />
        </button>
      </div>
    </div>
  );
};
