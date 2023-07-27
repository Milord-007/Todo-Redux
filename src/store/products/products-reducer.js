import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: undefined,
  search: ""
};

export const productsSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSelectedCategory,setSearch } = productsSlice.actions;

export default productsSlice.reducer;
