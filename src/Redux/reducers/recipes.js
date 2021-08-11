import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formInfo: '',
  cards: [],
  categories: { drinks: [], meals: [] },
  untouched: '',
  selectedCategory: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    sendFormData: (state, action) => {
      state.formInfo = action.payload;
    },
    fetchFoodCard: (state, action) => {
      const { filtered, selectedCategory } = action.payload;
      state.cards = filtered;
      state.selectedCategory = selectedCategory;
    },
    fetchFoodCategories: (state, action) => {
      const { array } = action.payload;
      state.categories = { ...state.categories, [action.payload.type]: array };
    },
    clearFormInfo: (state) => {
      state.formInfo = '';
    },
    fetchFilteredCategory: (state, action) => {
      const { filtered, filteredCategory } = action.payload;
      state.cards = filtered;
      state.selectedCategory = filteredCategory;
    },
  },
});

export const {
  sendFormData,
  fetchFoodCard,
  fetchFoodCategories,
  clearFormInfo,
  fetchFilteredCategory } = userSlice.actions;

export default userSlice.reducer;
