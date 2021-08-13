import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formInfo: '',
  cards: { meals: [], drinks: [], loaded: false },
  categories: { drinks: [], meals: [] },
  untouched: '',
  selectedCategory: '',
};

export const recipeSlice = createSlice({
  name: 'recipeSlice',
  initialState,
  reducers: {
    sendFormData: (state, action) => {
      state.formInfo = action.payload;
    },

    setLoadingState: (state, action) => {
      state.cards.loaded = action.payload;
    },

    fetchCardsFromIngredients: (state, action) => {
      const { cards, cat, loaded } = action.payload;
      state.formInfo = '';
      state.cards[cat] = cards;
      state.selectedCategory = cat;
      state.cards.loaded = loaded;
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
  setLoadingState,
  fetchCardsFromIngredients,
  sendFormData,
  fetchFoodCards,
  fetchFoodCategories,
  clearFormInfo,
  fetchFilteredCategory,
  fetchDetails } = recipeSlice.actions;

export default recipeSlice.reducer;
