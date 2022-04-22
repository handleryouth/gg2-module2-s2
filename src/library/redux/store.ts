import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { playlistSlice } from './playlistSlice'
import { sidebarSlice } from './sidebarSlice'
import { tokenSlice } from './tokenSlice'
import { userSlice } from './userSlice'

const persistsConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'user']
}

export const rootReducer = combineReducers({
  token: tokenSlice.reducer,
  user: userSlice.reducer,
  sidebar: sidebarSlice.reducer,
  playlist: playlistSlice.reducer
})

export const createReduxStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistsConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
