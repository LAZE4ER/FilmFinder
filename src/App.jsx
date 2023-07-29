import axios, { all } from "axios";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import SearchMovies from "./components/SearchMovies";
axios.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTNiM2I4NDBkOWY3ZmNhYTI0MzJhN2NjZGI1YmQxNiIsInN1YiI6IjY0Yjk2MzE3ZWZkM2MyMDBkZmRmMzQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mys7DU-3nKlbvpl9uzHvgFi_s5_F8D5z7YfT-TDWeM`;
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          query,
          language: "en-US",
        },
      })
      .then((res) => setMovies(res.data.results));
  }, []);
  axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        query,
      },
    })
    .then((res) => setMovies(res.data.results));

  function SearchFilms(newQuery) {
    setQuery(newQuery);
  }
  return (
    <div>
      <div>
        <NavBar />
        <SearchMovies onSearch={SearchFilms} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
