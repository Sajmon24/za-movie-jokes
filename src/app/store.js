import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "src/features/movies/moviesSlice";
import jokesReducer from "src/features/ai-jokes/aiJokesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    aiJokes: jokesReducer,
  },
});
