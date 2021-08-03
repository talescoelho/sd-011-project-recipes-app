import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  categories: [],
  comidas: [],
  foodIngredients: [],
  foodAreaList: [],
  drinkIngredients: [],
  randomFoodRecipe: '',
  randomDrinkRecipe: '',
  loading: false,
  error: null,
};

// createAsyncThunk receives two parameters: 1) name of the slice, 2) function name that creates the createAsyncThunk
export const getRecipes = createAsyncThunk(
  'requisition/fetchRecipes',
  async (actionName) => {
    const URLDictionary = {
      foodIngredients: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
      foodAreaList: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
      drinkIngredients: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      drinkAreaList: 'https://www.thecoktail.com/api/json/v1/1/list.php?a=list',
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
  reducers: {},
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.loading = true;
    },
    [getRecipes.fulfilled]: (state, action) => {
      const { actionName, response } = action.payload;
      state[actionName] = response;
      state.loading = false;
      // state.data = action.payload;
      // state.loading = false;
    },
    [getRecipes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action;
    },
  },
});

export default fetchReceitasSlice.reducer;
