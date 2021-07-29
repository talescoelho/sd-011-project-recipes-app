import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const reducers = {
  updateEmail: (state, { payload }) => {
    console.log({ state, payload });
    state.email = payload;
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

const { actions } = userSlice;

export const { reducer } = userSlice;

export const { updateEmail } = actions;

export const useUser = () => useSelector((state) => state.user);
