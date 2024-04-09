import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice.js"
import priceReducer from "./priceReducer.js";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        price:priceReducer,
    }
});

export default store;