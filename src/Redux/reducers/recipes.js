import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formInfo: '',
  cards: { meals: [], drinks: [] },
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
    fetchFoodCards: (state, action) => {
      const { filtered, cat } = action.payload;
      state.cards[cat] = filtered;
      state.selectedCategory = cat;
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
    fetchDetails: (state, action) => {
      const { selectedCategory, singleFood } = action.payload;
      state.singleFood = singleFood;
      state.selectedCategory = selectedCategory;
    },
  },
});

export const {
  sendFormData,
  fetchFoodCards,
  fetchFoodCategories,
  clearFormInfo,
  fetchFilteredCategory,
  fetchDetails } = userSlice.actions;

export default userSlice.reducer;
