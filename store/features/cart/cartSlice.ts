import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { WritableDraft } from "immer/dist/internal";

export interface CartState {
  value: CartItemType[];
}
export type CartItemType = {
  id: string;
  imageUrl: string;
  slug: string;
  name: string;
  color: string;
  price: number;
  qty: number;
};

export type CartPayload = {
  slug: string;
  color: string;
  name: string;
  price: number;
  imageUrl: string;
};
export type SetCartQtyType = {
  id: string;
  qty: number;
};

const isTypeCartPayload = (payload: any): boolean =>
  payload.slug && payload.color;

const initialState: CartState = {
  value: [],
};

const increaseByOne = (
  state: WritableDraft<CartState>,
  payload: CartPayload
) => {
  return state.value.map((item) => {
    if (item.slug === payload.slug && item.color === payload.color) {
      item.qty = item.qty + 1;
    }
    return item;
  });
};

const decreaseByOne = (
  state: WritableDraft<CartState>,
  payload: CartPayload
) => {
  return state.value.map((item) => {
    if (item.slug === payload.slug && item.color === payload.color) {
      if (item.qty > 1) item.qty = item.qty - 1;
    }
    return item;
  });
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartPayload>) => {
      const isInTheCart = state.value.findIndex(
        (item) =>
          item.slug === action.payload.slug &&
          item.color === action.payload.color
      );
      if (isInTheCart < 0) {
        state.value.push({
          id: uuidv4(),
          ...action.payload,
          qty: 1,
        });
      } else {
        increaseByOne(state, action.payload);
      }
    },
    increase: (state, action: PayloadAction<CartPayload>) => {
      state.value = increaseByOne(state, action.payload);
    },
    decrease: (state, action: PayloadAction<CartPayload>) => {
      state.value = decreaseByOne(state, action.payload);
    },
    setQty: (state, action: PayloadAction<SetCartQtyType>) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.qty = action.payload.qty;
        }
        return item;
      });
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  increase,
  decrease,
  removeFromCart,
  clearCart,
  setQty,
} = cartSlice.actions;

export default cartSlice.reducer;
