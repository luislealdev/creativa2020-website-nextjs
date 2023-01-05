import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showingMobileNavbar: false,
    isLoading: false,

  },
  reducers: {
    toggleShowingMobileNavbar: (state) => {
      state.showingMobileNavbar = !state.showingMobileNavbar;
    },
  },
});

export const { toggleShowingMobileNavbar } = uiSlice.actions;
