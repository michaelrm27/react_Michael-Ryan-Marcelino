import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Brand New",
      productImage: "john-doe/img",
      productDesc: "Doe",
      productPrice: "2500",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product, index) => index !== action.payload);
    },
    editProduct: (state, action) => {
        const {index, updateProduct} = action.payload
        state.products[index] = updateProduct;
    }
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
