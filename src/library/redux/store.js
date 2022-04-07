import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tokenSlice } from './tokenSlice'
import { userSlice } from './userSlice'

export const rootReducer = combineReducers({
  token: tokenSlice.reducer,
  user: userSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})
