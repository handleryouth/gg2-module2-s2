import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tokenSlice } from './tokenSlice'
import { userSlice } from './userSlice'

export const rootReducer = combineReducers({
  token: tokenSlice.reducer,
  user: userSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const createStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = createStore()
