import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "src/features/movies/moviesApi";
import jokesReducer from "src/features/ai-jokes/aiJokesSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    aiJokes: jokesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
