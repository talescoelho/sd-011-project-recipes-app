import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  orders: '',
  favoriteRecipes: '',

};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    sendUserInfo: (state, action) => {
      state.name = action.payload;
    },
    updateFavorites: (state, action) => {
      state.favoriteRecipes = action.payload;
    },
  },
});

export const {
  sendUserInfo,
  updateFavorites,
} = userSlice.actions;

export default userSlice.reducer;
