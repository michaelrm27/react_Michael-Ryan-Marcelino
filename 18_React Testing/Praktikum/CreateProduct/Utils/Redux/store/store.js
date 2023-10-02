import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/reducer"

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store;