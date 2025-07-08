import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isNavOpen: true,
  },
  reducers: {
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeNav: (state) => {
      state.isNavOpen = false;
    },
    openNav: (state) => {
      state.isNavOpen = true;
    },
  },
});

export const { toggleNav, closeNav, openNav } = appSlice.actions;
export default appSlice.reducer;
