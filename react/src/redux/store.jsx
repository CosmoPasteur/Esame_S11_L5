import { configureStore } from "@reduxjs/toolkit";
import music from "./music";
import searchReducer from "./search";

const store = configureStore({
  reducer: {
    songs: music,
    search: searchReducer,
  },
});

export default store;
