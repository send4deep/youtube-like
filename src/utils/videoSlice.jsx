import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = { ...state.videos, ...action.payload };
    },
    updateVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addVideos, updateVideos } = videosSlice.actions;
export default videosSlice.reducer;
