import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

// createAsyncThunk receives two parameters: 1) name of the slice, 2) function name that creates the createAsyncThunk
export const getRecipes = createAsyncThunk(
  'requisition/fetchRecipes',
  async (URL) => fetch(URL).then((res) => res.json()),
);

const fetchComidasSlice = createSlice({
  name: 'fetchRecipes',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.loading = true;
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getRecipes.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default fetchComidasSlice.reducer;
