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
    editProduct:(state, action) => {
      state[action.payload.index] = action.payload.data;
      return state
    }
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
