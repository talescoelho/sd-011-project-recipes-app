import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  orders: '',
  favoriteRecipes: '',
  recipeStatus: true,
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
    updateIngredientList: (state, action) => {
      state.recipeStatus = action.payload;
    },
  },
});

export const {
  sendUserInfo,
  updateFavorites,
  updateIngredientList,
} = userSlice.actions;

export default userSlice.reducer;
