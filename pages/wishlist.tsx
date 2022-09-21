import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardHorizontal } from "../components/ProductCardHorizontal";
import { SectionTitle } from "../components/SectionTitle";
import { Product } from "../lib/types";
import { RootState } from "../store";
import { addToCart, CartPayload } from "../store/features/cart/cartSlice";
import { removeFromWishList } from "../store/features/wishlist/wishlistSlice";

const WishList = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.value);
  const dispatch = useDispatch();
  const removeItem = (slug: string) => {
    dispatch(removeFromWishList(slug));
  };
  const addItemToCart = (product: Product) => {
    const payload: CartPayload = {
      slug: product.slug,
      color: product.colors[0],
      name: product.name,
      price: product.price,
      imageUrl: product.images[0],
    };
    dispatch(addToCart(payload));
  };

  return (
    <>
      <Head>
        <title>My WishList ({wishlistItems.length}) - Audio Store</title>
      </Head>
      <SectionTitle className={`text-2xl sm:text-3xl font-bold my-4`}>
        My WishList ({wishlistItems.length})
      </SectionTitle>
      {wishlistItems.length < 1 && <p>wishlist is empty.</p>}
      <div
        className={`grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8`}
      >
        {wishlistItems &&
          wishlistItems.map((product) => (
            <div key={product.slug} className={`w-full`}>
              <ProductCardHorizontal product={product} />
              <div className={`w-full flex gap-2 px-2`}>
                <button
                  className={`w-full border border-red-500 hover:bg-red-500 rounded text-red-500 hover:text-white px-2 py-1 text-center`}
                  onClick={() => removeItem(product.slug)}
                >
                  - Remove
                </button>
                <button
                  className={`w-full bg-gray-700 hover:bg-gray-600 rounded text-white px-2 py-1 text-center`}
                  onClick={() => addItemToCart(product)}
                >
                  + Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default WishList;
