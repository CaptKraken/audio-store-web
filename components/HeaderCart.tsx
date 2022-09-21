import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartImage from "../public/icons/cart.png";
import { RootState } from "../store";

export const HeaderCart = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.value.reduce(
      (previousValue, currentValue) => previousValue + currentValue.qty,
      0
    )
  );
  return (
    <Link href={`/cart`} passHref>
      <a
        className={
          "shrink-0 bg-green-400 h-10 w-10 rounded-full flex justify-center items-center p-2 relative"
        }
      >
        <Image src={cartImage} alt={"cart"} />
        {cartCount > 0 && (
          <div
            className={`w-4 h-4 rounded-full bg-red-600 absolute top-0 right-0 flex items-center justify-center`}
          >
            <p className={`text-white text-sm`}>{cartCount ?? 0}</p>
          </div>
        )}
      </a>
    </Link>
  );
};
