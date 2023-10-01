import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  productData: [],
  userInfo: null,
}

export const shopperslice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id,
      )
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
    plusQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id,
      )
      if (item) {
        item.quantity++
      }
    },
    minusQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id,
      )
      if (item?.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload._id,
      )
    },

    resetCart: (state) => {
      state.productData = []
    },
    addUser: (state, action) => {
      state.userInfo = action.payload
    },
    removeUser: (state) => {
      state.userInfo = null
    },
  },
})

export const {
  addToCart,
  resetCart,
  deleteItem,
  minusQuantity,
  plusQuantity,
  addUser,
  removeUser,
} = shopperslice.actions
export default shopperslice.reducer
