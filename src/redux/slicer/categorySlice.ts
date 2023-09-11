import { createSlice } from "@reduxjs/toolkit";


interface CategoryState {
  category: string | null
}
const initialState: CategoryState = {
  category: 'Завтраки '
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { handleCategory } = categorySlice.actions;
export default categorySlice.reducer;
