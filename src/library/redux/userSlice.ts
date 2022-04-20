import { createSlice } from '@reduxjs/toolkit';
import { UserData } from 'types';

const initialState: UserData = {
  display_name: '',
  followers: {
    total: 0,
    href: ''
  },
  images: [],
  id: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUserProfile: (state, action) => {
      return (state = action.payload);
    }
  }
});

export const { addUserProfile } = userSlice.actions;
