import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  meals: [],
  drinks: [],
  categories: [],
  typeRecipe: '',
  loading: false,
  error: null,
};

// createAsyncThunk receives two parameters: 1) name of the slice, 2) function name that creates the createAsyncThunk
export const getRecipes = createAsyncThunk(
  'requisition/fetchRecipes',
  async (URL) => fetch(URL).then((res) => res.json()),
);

const fetchReceitasSlice = createSlice({
  name: 'fetchRecipes',
  initialState,
  reducers: {
    setTypeRecipe: (state, action) => {
      state.typeRecipe = action.payload.typeRecipe;
    },
  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.loading = true;
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.meals = !action.payload.meals ? state.meals : action.payload.meals;
      state.drinks = !action.payload.drinks ? state.drinks : action.payload.drinks;
      state.categories = !action.payload.categories
        ? state.categories : action.payload.categories;
      state.loading = false;
    },
    [getRecipes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action;
    },
  },
});

export const { setTypeRecipe } = fetchReceitasSlice.actions;

export default fetchReceitasSlice.reducer;
