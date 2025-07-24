import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    setResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setResult } = searchSlice.actions;
export default searchSlice.reducer;
