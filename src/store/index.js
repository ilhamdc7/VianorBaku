import { configureStore } from "@reduxjs/toolkit";
import {setCookie, getCookie} from 'cookies-next'


const cart = getCookie('cart')

const store = configureStore({
  reducer: {
    cart: (state = JSON.parse(cart ?? '[]') || [], action) => {
      switch (action.type) {
        case "ADD_ITEM":
          setCookie("cart", JSON.stringify([...state, action.payload]));
          return [...state, action.payload];
        case "REMOVE_ITEM":
            setCookie("cart", JSON.stringify(state.filter((item) => item.id !== action.payload)));
          return state.filter((item) => item.id !== action.payload);
        default:
          return state;
      }
    },
  },
});

export default store;