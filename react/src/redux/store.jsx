import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./music";
import searchReducer from "./search";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    search: searchReducer,
  },
});

export default store;
