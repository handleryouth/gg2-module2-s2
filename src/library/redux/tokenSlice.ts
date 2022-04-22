import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    addToken: (state, action) => {
      return (state = action.payload)
    },
    removeToken: (state) => {
      state = ''
      return state
    }
  }
})

export const { addToken, removeToken } = tokenSlice.actions
