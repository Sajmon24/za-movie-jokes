import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./api";

const initialState = {
  movies: [],
  status: "idle", // 'idle' / 'loading' / 'suceeded' / 'failed'
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await fetchPopularMovies();
  return data.data;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.results;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllMovies = createSelector(
  [(state) => state.movies.movies],
  (mov) => {
    const movies = [...mov];
    movies.sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
    return movies;
  }
);
export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;
export const selectMovieById = (state, movieId) =>
  state.movies.movies.find((movie) => movie.id === Number(movieId));

export default moviesSlice.reducer;

/* Usage of Redux createEntityAdapter 


  const movieAdapter = creteEntityAdapter({
  sortComparer: (movieA, movieB) => movieB.vote_average - movieA.vote_average,
});

const initialState = movieAdapter.getInitialState({
    status: "idle", // 'idle' / 'loading' / 'suceeded' / 'failed'
    error: null,
})

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await fetchPopularMovies();
  return data.data;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        movieAdapter.setMany(state, action.payload.results);
      
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const { selectAll: selectAllMovies, selectById: selectMovieById } =
movieAdapter.getSelector();
export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;


export default moviesSlice.reducer;

*/
