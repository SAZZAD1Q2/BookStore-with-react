import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? ['Under construction']
        : state.categories;
    },
  },
});

export const { updateCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
