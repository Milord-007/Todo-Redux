// import { getProducts } from "../api/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  list: {},
  categories: [],
  // name: "",

  loading: false,
  filterCategory: "All",
};

export const getAllCategories = createAsyncThunk(
  "product/getAllCategories",
  async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  );
  export const filterCategories = createAsyncThunk(
    "product/filterCategories",
    async (_, { getState, dispatch }) => {
      const filterCategory = getState().product.filterCategory;
      console.log(filterCategory);
      try {
        if(filterCategory=="All"){
          const response = await fetch("https://dummyjson.com/products/categories");
          const data = await response.json();
          dispatch(getProducts())
          return data
        }
        const response = await fetch(`https://dummyjson.com/products/category/${filterCategory}`);
        const data = await response.json();
        
        dispatch(getProducts())
        console.log(data.products);
        return data.products;
        
    } catch (error) {
      console.log(error);
    }
  }
);



const setLoading = (state) => {
  state.loading = true;
};

export const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleChange(state, action) {
      state.name = action.payload;
    },
    handleChangeCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, setLoading);
    builder.addCase(getProducts.fulfilled, (state, action) => {
    state.loading = false;
      
      state.list = action.payload.products;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });


    builder.addCase(getAllCategories.pending, setLoading);
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = false;
   
      state.categories = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getAllCategories.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { handleChangeCategory } = slice.actions;

export default slice.reducer;
