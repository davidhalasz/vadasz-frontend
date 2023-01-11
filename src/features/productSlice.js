import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
  filters: {
    categories: [],
    subCategories: [],
    featured: false,
    showImage: false,
  },
  filteredProducts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/products"
      );
      return response.data;
    } catch (error) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFilter(state, action) {
      const payload = action.payload;
      if (state.filters[payload.name].includes(payload.value)) {
        const filteredList = state.filters[payload.name].filter(
          (data) => data !== payload.value
        );
        state.filters[payload.name] = [...filteredList];
      } else {
        state.filters[payload.name] = [
          ...state.filters[payload.name],
          payload.value,
        ];
      }

      //remove subcats of removed category
      if (payload.value === "Fegyverek") {
        let filteredSubCat = state.filters.subCategories.filter(
          (data) =>
            data !== "Golyós puska" && 
            data !== "Sörétes puska" &&
            data !== "Vegyescsövű puska" &&
            data !== "Maroklőfegyver" &&
            data !== "Egyéb fegyverek"
        );
        state.filters.subCategories = [...filteredSubCat];
      }

      if (payload.value === "Optikák") {
        let filteredSubCat = state.filters.subCategories.filter(
          (data) =>
            data !== "Távcsövek" &&
            data !== "Éjjellátó távcső" &&
            data !== "Hőkamerák" &&
            data !== "Vadkamera"
        );
        state.filters.subCategories = [...filteredSubCat];
      }
    },
    changeFeaturedFilter(state, action) {
      state.filters.featured = action.payload.value;
    },
    changeShowImageFilter(state, action) {
      state.filters.showImage = action.payload.value;
    },
    filteringProducts(state) {
      let featuredProducts = state.products.filter((p) => p.featured === true);
      let baseProducts = state.products.filter((p) => p.featured === false);
      let allProducts = [...featuredProducts, ...baseProducts];
      let acc = [];

      if (state.filters.featured) {
        acc = allProducts.filter((product) => product.featured === true);
      } else {
        acc = allProducts.filter(
          (product) => product.featured === true || product.featured === false
        );
      }
      state.filteredProducts = [...acc];
      allProducts = [...acc];
      acc = [];

      if (state.filters.showImage) {
        acc = allProducts.filter(
          (product) => product.images && product.images.split(", ").length > 0
        );
      } else {
        acc = allProducts.filter((product) => product);
      }

      state.filteredProducts = [...acc];
      allProducts = [...acc];
      acc = [];

      const filtering = (typeName, filterName) => {
        acc = [];
        state.filteredProducts.filter((product) =>
          state.filters[filterName].forEach((e) => {
            if (product[typeName] === e) {
              acc = [...acc, product];
            }
          })
        );
        state.filteredProducts = [...acc];
        acc = [];
      };

      if (state.filters.categories.length > 0) {
        filtering("category", "categories");
      }

      if (state.filters.subCategories.length > 0) {
        filtering("subCategory", "subCategories");
      }
    },
    resetFilter(state) {
      state.filters.categories = [];
      state.filters.featured = false;
      state.filters.showImage = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
