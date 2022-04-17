import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    display_name: '',
    followers: {
      total: 0,
      href: ''
    },
    id: ''
  },
  reducers: {
    addUserProfile: (state, action) => {
      return (state = action.payload)
    }
  }
})

export const { addUserProfile } = userSlice.actions
