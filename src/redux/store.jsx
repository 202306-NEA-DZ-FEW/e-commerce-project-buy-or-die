import { configureStore } from "@reduxjs/toolkit"
import shopperReducer from "./shopperSlice"

export const store = configureStore({
  reducer: {
    shopper: shopperReducer,
  },
})
