import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    addedToCart: false,
    failedToAdd: false,
  },
  reducers: {
    setAddedToCart: (state, action) => {
      state.addedToCart = action.payload;
    },
    setFailedToAdd: (state, action) => {
      state.failedToAdd = action.payload;
    },
  },
});

export const { setAddedToCart, setFailedToAdd } = cartReducer.actions;
export default cartReducer.reducer;
