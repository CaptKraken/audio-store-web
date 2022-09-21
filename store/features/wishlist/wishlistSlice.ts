import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types";

export interface WishListState {
  value: Product[];
}

const initialState: WishListState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Product>) => {
      const isInList =
        state.value.findIndex((item) => item.slug === action.payload.slug) >= 0;
      if (!isInList) state.value.push(action.payload);
    },
    removeFromWishList: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.slug !== action.payload);
    },
    clearWishList: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList, clearWishList } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
