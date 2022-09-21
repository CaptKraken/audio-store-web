import React from "react";
import { products } from "../lib/products";
import { ProductCardHorizontal } from "./ProductCardHorizontal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiper, { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

const SuggestedProductList = ({ category }: { category: string }) => {
  return (
    <div className={`w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-2`}>
      {products
        .filter((item) => item.category === category)
        .slice(0, 6)
        .map((product, i) => (
          <div
            key={product.slug + i}
            className={` w-full flex px-2 gap-2 items-center bg-green-50 rounded`}
          >
            <div className={`bg-white rounded grid justify-items-center`}>
              <Image
                src={`${product.images[0]}`}
                width={135}
                height={135}
                objectFit={"contain"}
                alt={product.name}
              />
            </div>
            <div className="w-full py-2">
              <p className={`text-xl font-medium`}>{product.name}</p>
              <p>USD {product.price}</p>
              <Link passHref href={`/products/${product.slug}`}>
                <a
                  className={
                    "mt-2 group flex items-center justify-center px-4 py-1 rounded text-white font-medium bg-green-400 hover:bg-green-300"
                  }
                >
                  Shop
                </a>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
{
}
export default SuggestedProductList;
