import Image from "next/image";
import React, {
  FormEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  CartItemType,
  clearCart,
  decrease,
  increase,
  removeFromCart,
} from "../store/features/cart/cartSlice";
import { fullProducts } from "../lib/products";
import Head from "next/head";
import { useCalcSubTotal } from "../lib/hooks/useCalcTotal";
import CartItem from "../components/CartItem";

type PromoCodeType = {
  [code: string]: number;
};

const promoCodes: PromoCodeType = {
  AEC765Z: 15,
  GL9765Z: 20,
};

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.value);
  const [itemCount, setItemCount] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const promoCodeRef = useRef<HTMLInputElement | null>(null);
  const [isValidCode, setIsValidCode] = useState<boolean>(true);
  const dispatch = useDispatch();
  const subTotal = useCalcSubTotal();

  const calcTotal = () => (subTotal - discount).toFixed(2);

  useEffect(() => {
    const count = cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.qty,
      0
    );
    setItemCount(count);
  }, [cartItems]);

  const handlePromoCode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (promoCodeRef.current?.value.trim()) {
      const discountedAmount = promoCodes[promoCodeRef.current?.value.trim()];
      setIsValidCode(true);
      setDiscount(0);
      if (discountedAmount) {
        setDiscount(discountedAmount);
      } else {
        setIsValidCode(false);
      }
    }
  };

  const closeMessage = () => setIsValidCode(true);

  const isEmpty = cartItems.length <= 0;

  return (
    <>
      <Head>
        <title>My Cart ({itemCount}) - Audio Store</title>
      </Head>

      <h1 className={`my-4 font-bold text-2xl`}>My Cart ({itemCount})</h1>
      {cartItems.length <= 0 && <p className={`mt-4`}>Cart empty</p>}
      <div className={`lg:flex gap-6`}>
        <div style={{ flex: "70%" }} className={`grid gap-4`}>
          {cartItems.map((item, i) => (
            <CartItem key={item.slug + i} id={item.id} />
          ))}
        </div>
        <div style={{ flex: "30%" }} className={`mt-6 lg:mt-0`}>
          <div>
            <p>Enter Promo Code</p>
            <form
              className={`flex w-full items-stretch mt-2`}
              onSubmit={handlePromoCode}
            >
              <input
                ref={promoCodeRef}
                type={"text"}
                className={`border-2 outline-none border-gray-500 focus:border-black border-r-black disabled:border-gray-400 disabled:cursor-not-allowed rounded-l p-2 w-full`}
                placeholder={"Promo Code"}
                disabled={isEmpty}
              />
              <button
                type={"submit"}
                className={`bg-gray-800 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 rounded-r`}
                disabled={isEmpty}
              >
                Submit
              </button>
            </form>
            {!isValidCode && (
              <div className={`text-red-700 flex justify-between mt-2`}>
                <p>
                  code &apos;{promoCodeRef.current?.value}&lsquo; is invalid.
                </p>
                <button
                  onClick={closeMessage}
                  className={`hover:bg-red-300 px-2 rounded-sm`}
                >
                  x
                </button>
              </div>
            )}
            <div className={`flex justify-between mt-2 text-gray-700`}>
              <p>Delivery Cost</p>
              <p>TBD</p>
            </div>
            <div className={`flex justify-between mt-2 text-gray-700`}>
              <p>Discount</p>
              <p>${discount}</p>
            </div>
            <div className={`flex justify-between mt-2 text-gray-700`}>
              <p>Sub Total</p>
              <p>${subTotal.toFixed(2)}</p>
            </div>
            <div
              className={`flex justify-between text-gray-700 border-t pt-2 mt-4`}
            >
              <p>Estimated Total</p>
              <p>${calcTotal()}</p>
            </div>
            <button
              className={`bg-green-500 px-4 py-2 text-white rounded-sm font-medium hover:bg-green-400 flex justify-center items-center gap-2 w-full mt-4 group disabled:bg-gray-400 disabled:cursor-not-allowed`}
              disabled={isEmpty}
            >
              <span>Check Out </span>
              <span
                className={`${
                  isEmpty ? "" : "group-hover:ml-2 transition-all duration-200"
                }`}
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
