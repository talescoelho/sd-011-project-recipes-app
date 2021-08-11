import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  orders: '',
  favoriteRecipes: '',
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sendUserInfo: (state, action) => {
      state.name = action.payload;
    },
    updateFavorite: (state, action) => {
      state.favoriteRecipes = action.payload;
    },
    getFavoriteRecipes: (state, action) => {
      state.favoriteRecipes = action.payload;
    },
    filterRecipes: (state, action) => {
      state.favoriteRecipes = action.payload;
    },
  },
});

export const {
  sendUserInfo,
  updateFavorite,
  getFavoriteRecipes,
  filterRecipes } = userSlice.actions;

export default userSlice.reducer;
