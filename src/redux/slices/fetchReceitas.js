import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  foods: [],
  drinks: [],
  foodCategories: [],
  drinksCategories: [],
  comidas: [],
  foodIngredients: [],
  foodAreaList: [],
  drinkIngredients: [],
  randomFoodRecipe: '',
  randomDrinkRecipe: '',
  loading: false,
  error: null,
  input: '',
};

// createAsyncThunk receives two parameters: 1) name of the slice, 2) function name that creates the createAsyncThunk
export const getRecipes = createAsyncThunk(
  'requisition/fetchRecipes',
  async (actionName, { getState }) => {
    const { fetchReceitas: { input } } = getState();
    const URLDictionary = {
      foods: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      filterByFoodCategorie:
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`,
      filterByDrinkCategorie:
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${input}`,
      foodIngredients: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
      foodAreaList: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
      drinkIngredients: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      drinkAreaList: 'https://www.thecoktail.com/api/json/v1/1/list.php?a=list',
      foodCategories: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
      drinksCategories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
      randomFoodRecipe: 'https://www.themealdb.com/api/json/v1/1/random.php',
      randomDrinkRecipe: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    };
    const response = await fetch(URLDictionary[actionName]).then((res) => res.json());
    return {
      response,
      actionName,
    };
  },
);
const fetchReceitasSlice = createSlice({
  name: 'fetchRecipes',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.loading = true;
    },
    [getRecipes.fulfilled]: (state, action) => {
      const { actionName, response } = action.payload;
      state[actionName] = response;
      if (actionName === 'filterByFoodCategorie') {
        state.foods = response;
      }
      if (actionName === 'filterByDrinkCategorie') {
        state.drinks = response;
      }
      state.loading = false;
    },
    [getRecipes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action;
    },
  },
});

export const { setInput } = fetchReceitasSlice.actions;

export default fetchReceitasSlice.reducer;
