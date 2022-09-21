import { useSelector } from "react-redux";
import { useMemo } from "react";
import { CartItemType } from "../../store/features/cart/cartSlice";
import { RootState } from "../../store";

export const useCalcSubTotal = () => {
  const cartItems = useSelector((state: RootState) => state.cart.value);

  return useMemo(
    () =>
      cartItems.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.qty * currentValue.price,
        0
      ),
    [cartItems]
  );
};
