import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      return [...state, action.payload];
    },

    deleteProduct: (state, action) => {
      return state.filter((element, index) => index !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
