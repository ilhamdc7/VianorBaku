import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {cartReducer} from '../reducers/cartSlice'
import {reklamReduces} from '../reducers/reklamSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({reklam: reklamReduces, cart:cartReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

// Rehydration is started from _app after the first render, so the server HTML and
// the client's hydration render both use the initial state and match.
export const persistor = persistStore(store, { manualPersist: true })