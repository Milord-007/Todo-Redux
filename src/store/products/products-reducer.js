import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: undefined,
  search: '',
  idx: null,
};

export const productsSlice = createSlice({
  name: 'products',
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

export const { setSelectedCategory, setSearch } = productsSlice.actions;

export default productsSlice.reducer;
