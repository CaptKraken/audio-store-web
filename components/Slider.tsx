import { iteratorSymbol } from "immer/dist/internal";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import slides from "../lib/promoSlides";
import SliderItem from "./SliderItem";
const TEN_SECONDS = 10000;
const Slider = () => {
  const [current, setCurrent] = useState(0);

  const goToNext = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current]);

  const goToPrevious = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout = setTimeout(() => {});
    if (slides.length > 0) {
      interval = setInterval(() => {
        goToNext();
      }, TEN_SECONDS);
    }

    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className={"relative overflow-y-hidden"}>
      {slides &&
        slides.map((item, i) => {
          const isCurrent: boolean = current === i;
          return (
            <div
              key={item.productName}
              className={`${
                isCurrent
                  ? "opacity-100 transition-all duration-700 scale-x-100"
                  : "opacity-0 transition-all duration-100 scale-95"
              }`}
            >
              {isCurrent && <SliderItem item={item} />}
            </div>
          );
        })}
      {slides.length > 1 && (
        <div
          className={
            "absolute w-full flex items-center justify-end md:justify-start md:px-4 lg:justify-center bottom-4 right-4 md:right-0 gap-1"
          }
        >
          {slides.map((item, i) => {
            const isCurrent: boolean = current === i;
            return (
              <button
                onClick={() => goToSlide(i)}
                aria-label={`go to slide ${i}`}
                key={item.productName}
                className={`h-3 md:h-4 rounded-lg ${
                  isCurrent
                    ? "bg-green-400 w-6 md:w-8 opacity-100 transition-all duration-300"
                    : "bg-green-200 w-3 md:w-4 opacity-50 transition-all duration-300"
                }`} 
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
