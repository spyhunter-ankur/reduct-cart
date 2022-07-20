import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
        console.log("action---------",action);
      return [...state, action.payload];
    },
  },
});

export const { addProduct } = productSlice.actions;
// export const selectProduct = (state) => state;
export default productSlice.reducer;

// import { getData, putData } from "../actions/action"
// const initialState = []

// const productReducer = (state = initialState , action) => {
//   switch (action.type) {
//       case getData:
//           return{
//               ...state,
//               numberOfProduct:state
//           }
//           case putData:
//             return{
//                 updatedState:state.value
//             }
//       default:
//           return state
//   }
// }
// export default productReducer;
