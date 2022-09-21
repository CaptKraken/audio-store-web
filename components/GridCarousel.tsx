import React, { useState } from "react";
import { ProductCardHorizontal } from "./ProductCardHorizontal";
import { products } from "../lib/products";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export const GridCarousel = () => {
  const [state, setState] = useState({
    start: 0,
    end: 2,
  });

  const previous = () => {
    if (state.start - 4 >= 0) {
      setState((prev) => ({
        start: prev.start - 4,
        end: prev.end - 4,
      }));
    }
  };
  const next = () => {
    setState((prev) => ({
      start: prev.start + 4,
      end:
        prev.end + 4 > products.length - 1 ? products.length - 1 : prev.end + 4,
    }));
  };

  return (
    <div className={"bg-green-100 p-4 gap-4 grid grid-cols-2 md:grid-cols-4"}>
      {products.slice(0, 4).map((product, i) => (
        <ProductCardHorizontal key={i} product={product} />
      ))}
    </div>
  );
};
