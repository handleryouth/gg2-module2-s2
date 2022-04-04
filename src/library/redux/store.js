import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tokenSlice } from "./tokenSlice";

export const rootReducer = combineReducers({
  token: tokenSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
