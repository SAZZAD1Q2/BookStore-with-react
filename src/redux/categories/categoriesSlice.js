import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction' ? ['Under construction'] : state.categories;
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      const categoryToRemove = action.payload;
      state.categories = state.categories.filter((category) => category !== categoryToRemove);
    },
  },
});

export const { checkStatus, addCategory, removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
