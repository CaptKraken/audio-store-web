import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fullProducts } from "../lib/products";
import {
  decrease,
  increase,
  removeFromCart,
  setQty,
} from "../store/features/cart/cartSlice";
import { capitalizeFirstLetter } from "../lib/utils";
import { addToWishList } from "../store/features/wishlist/wishlistSlice";
import { Product } from "../lib/types";

const CartItem = ({ id }: { id: string }) => {
  const itemState = useSelector(
    (state: RootState) => state.cart.value.filter((item) => item.id === id)[0]
  );
  const dispatch = useDispatch();

  const getTotal = () => {
    return ((itemState.price ?? 0) * itemState.qty).toFixed(2);
  };

  const handleAddToWishlist = (slug: string) => {
    const product = fullProducts.find((item) => item.slug === slug);

    if (product) {
      dispatch(addToWishList(product));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(itemState.id));
  };

  const handleAmountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      dispatch(setQty({ id: itemState.id, qty: Number(e.target.value) }));
    }
  };

  return (
    <div className={`w-full`}>
      <div className={`flex gap-4 h-min w-full`}>
        {itemState.imageUrl && (
          <div
            className={`bg-gray-200 min-w-max max-w-32 max-h-32 flex justify-center items-center rounded self-center`}
          >
            <Image
              alt="product image"
              src={`${itemState.imageUrl}`}
              width={128}
              height={128}
              objectFit={`contain`}
            />
          </div>
        )}
        <div
          className={`flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between w-full border-b pb-4`}
        >
          <div className={`flex gap-2 flex-col items-start justify-between`}>
            <div>
              <p className={`font-bold text-lg`}>{itemState.name}</p>
              <p>
                <span className={`font-medium`}>Color: </span>
                <span>{capitalizeFirstLetter(itemState.color)}</span>
              </p>
            </div>
            <div className={`flex gap-2`}>
              <button className={`hover:underline`} onClick={handleRemoveItem}>
                - Remove from cart
              </button>
              <p>|</p>
              <button
                className={`hover:underline`}
                onClick={() => handleAddToWishlist(itemState.slug)}
              >
                + Add to wishlist
              </button>
            </div>
          </div>
          <div className={`flex justify-between gap-4 h-min`}>
            <p className={`flex flex-col`}>
              <span className={`inline-block font-semibold mb-1`}>Price</span>
              <span>${itemState.price.toFixed(2)}</span>
            </p>
            <div className={`flex flex-col`}>
              <span className={`inline-block font-semibold`}>QTY</span>
              <select
                className={`bg-gray-200 w-16 p-1 rounded`}
                value={itemState.qty}
                onChange={handleAmountChange}
              >
                {Array.from(Array(10).keys()).map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <p className={`flex flex-col`}>
              <span className={`inline-block font-semibold mb-1`}>Total</span>
              <span>${getTotal()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
