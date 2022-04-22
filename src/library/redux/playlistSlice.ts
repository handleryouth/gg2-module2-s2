import { createSlice } from '@reduxjs/toolkit'
import { PlaylistProps } from 'types'

export const playlistSlice = createSlice({
  name: 'playlist list',
  initialState: [] as PlaylistProps[],
  reducers: {
    addPlaylist: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addPlaylist } = playlistSlice.actions
