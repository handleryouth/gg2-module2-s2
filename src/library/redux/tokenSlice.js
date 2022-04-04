import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    addToken: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addToken } = tokenSlice.actions;
