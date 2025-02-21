import { createMusic } from "@reduxjs/toolkit";
const initialState = {
  current: null,
  favorites: [],
};

const music = createMusic(initialState, (builder) => {
  builder
    .addCase("SET_CURRENT_SONG", (state, action) => {
      state.current = action.payload;
    })
    .addCase("TOGGLE_FAVORITE", (state, action) => {
      const song = action.payload;
      const isFavorite = state.favorites.some((fav) => fav.id === song.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter((fav) => fav.id !== song.id);
      } else {
        state.favorites.push(song);
      }
    });
});

export const setCurrentSong = (song) => ({
  type: "SET_CURRENT_SONG",
  payload: song,
});

export const toggleFavorite = (song) => ({
  type: "TOGGLE_FAVORITE",
  payload: song,
});

export default music;
