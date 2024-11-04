import axiosLib from "axios";
import { MOVIE_API_URL } from "src/common/constants";

const axios = axiosLib.create({
  baseURL: MOVIE_API_URL,
  /*
    headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_API_KEY}`,
    accept: "application/json
*/
});
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_MOVIEDB_API_KEY
}`;
axios.defaults.headers.common["accept"] = "application/json";

export const fetchPopularMovies = async () => await axios.get("/movie/popular");