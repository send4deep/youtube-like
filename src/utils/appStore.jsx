import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";

export default configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    videos: videoSlice,
  },
});
