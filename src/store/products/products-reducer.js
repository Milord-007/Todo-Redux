import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: undefined,
};

export const productsSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = productsSlice.actions;

export default productsSlice.reducer;
