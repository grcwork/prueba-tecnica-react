import { createSlice, isAction } from "@reduxjs/toolkit";
import { BookTableInfo } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  value: BookTableInfo[];
}

const initialState: FavoritesState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteBook: (state, action: PayloadAction<BookTableInfo>) => {
      let isIncluded = false;
      for (let book of state.value) {
        if (book.id === action.payload.id) {
          isIncluded = true;
          break;
        }
      }
      if (!isIncluded) {
        state.value = [...state.value, action.payload];
      }
    },
    removeFavoriteBookById: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addFavoriteBook, removeFavoriteBookById } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
