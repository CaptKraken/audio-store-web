import Image from "next/image";
import React, { useState } from "react";

import chevronRightIcon from "../public/icons/chevron_right.png";
import chevronLeftIcon from "../public/icons/chevron_left.png";
import ProductDetailGalleryThumbnail from "./ProductDetailGalleryThumbnail";
import { ModalContainer } from "./ModalContainer";
type ProductDetailGalleryProps = {
  images: string[];
};

export const ProductDetailGallery = ({ images }: ProductDetailGalleryProps) => {
  const [current, setCurrent] = useState<number>(0);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const closeModal = () => setIsOpened(false);
  const openModal = () => setIsOpened(true);

  const showImage = (index: number) => {
    setCurrent(index);
  };

  const goToNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const goToPrevious = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <>
      <div className={`lg:max-w-full`}>
        <div className={`relative`}>
          <button onClick={openModal}>
            <Image
              alt="product image"
              src={`${images[current]}`}
              width={1080}
              height={720}
              objectFit={`contain`}
            />
          </button>
          <div className={`absolute flex h-full items-center top-0`}>
            <button onClick={goToPrevious}>
              <Image
                alt="chevron left"
                src={chevronLeftIcon}
                width={36}
                height={36}
              />
            </button>
          </div>
          <div className={`absolute flex h-full items-center top-0 right-0`}>
            <button onClick={goToNext}>
              <Image
                alt="chevron right"
                src={chevronRightIcon}
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
        <div className={`flex justify-center items-center w-full`}>
          <div className={`max-w-md lg:max-w-lg`}>
            <ProductDetailGalleryThumbnail
              images={images}
              current={current}
              showImage={showImage}
            />
          </div>
        </div>
      </div>
      {isOpened && (
        <ModalContainer setOpen={setIsOpened}>
          <div
            className={`flex justify-center items-center w-full h-full select-none`}
          >
            <div
              className={`relative bg-white mx-4`}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
              }}
            >
              <div>
                <Image
                  alt="product image"
                  src={`${images[current]}`}
                  width={1080}
                  height={720}
                  objectFit={`contain`}
                />
              </div>
              <div
                className={`absolute flex justify-between w-full h-full items-center top-0`}
              >
                <button onClick={goToPrevious}>
                  <Image
                    alt="chevron right"
                    src={chevronLeftIcon}
                    width={36}
                    height={36}
                  />
                </button>
                <button onClick={goToNext}>
                  <Image
                    alt="chevron right"
                    src={chevronRightIcon}
                    width={36}
                    height={36}
                  />
                </button>
              </div>
              <button
                className={`absolute top-4 right-4 font-semibold text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded`}
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
};
