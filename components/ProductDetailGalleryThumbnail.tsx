import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiper, { Navigation } from "swiper";

import chevronRightIcon from "../public/icons/chevron_right.png";
import chevronLeftIcon from "../public/icons/chevron_left.png";

// import required modules
import Image from "next/image";

type ProductDetailGalleryThumbnail = {
  images: string[];
  current: number;
  showImage: Function;
};

export default function ProductDetailGalleryThumbnail({
  images,
  current,
  showImage,
}: ProductDetailGalleryThumbnail) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className={`relative w-full`}>
      <Swiper
        slidesPerView={5.5}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
          swiper.navigation.init();
        }}
        className="mySwiper"
      >
        {images &&
          images.map((imageUrl, i) => (
            <SwiperSlide key={i}>
              <button
                onClick={() => showImage(i)}
                className={`hover:bg-green-100 ${
                  current === i ? "bg-green-200" : ""
                } rounded`}
              >
                <Image
                  alt="product image"
                  src={`${imageUrl}`}
                  width={540}
                  height={360}
                  objectFit={`contain`}
                />
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <div
        className={`absolute w-full h-full top-0 flex justify-between items-center`}
      >
        <button
          ref={navigationPrevRef}
          onClick={() => {
            swiper.prototype.slidePrev(250);
          }}
          className={`bg-green-300 h-full flex items-center justify-center p-2 z-10`}
        >
          <Image
            alt="chevron right"
            src={chevronLeftIcon}
            width={36}
            height={36}
          />
        </button>
        <button
          ref={navigationNextRef}
          onClick={() => {
            swiper.prototype.slideNext(250);
          }}
          className={`bg-green-300 h-full flex items-center justify-center p-2 z-10`}
        >
          <Image
            alt="chevron right"
            src={chevronRightIcon}
            width={36}
            height={36}
          />
        </button>
      </div> */}
    </div>
  );
}
