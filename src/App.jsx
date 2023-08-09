import axios, { all } from "axios";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import Slider from "./components/Slider";
import LoaderBtn from "./components/LoaderBtn";
import { createTheme } from "@mui/material";
axios.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTNiM2I4NDBkOWY3ZmNhYTI0MzJhN2NjZGI1YmQxNiIsInN1YiI6IjY0Yjk2MzE3ZWZkM2MyMDBkZmRmMzQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mys7DU-3nKlbvpl9uzHvgFi_s5_F8D5z7YfT-TDWeM`;
function Theme(isDarkThemeActive) {
  localStorage.setItem("theme", isDarkThemeActive);
}
function InitTheme() {
  return !!JSON.parse(localStorage.getItem("theme"));
}
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(InitTheme);
  useEffect(() => {
    Theme(isDarkThemeActive);
  }, [isDarkThemeActive]);
  useEffect(() => {
    setLoading(true);
    if (query === "") {
      axios
        .get("https://api.themoviedb.org/3/trending/movie/week", {
          params: {
            query,
            language: "en-En",
            page,
          },
        })
        .then((res) => {
          setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
          setTotalPages(res.data.total_pages);
        })
        .finally(() => setLoading(false));
    } else {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query,
            language: "en-En",
            page,
          },
        })
        .then((res) => {
          setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
          setTotalPages(res.data.total_pages);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query, page]);
  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }
  function search(newQuery) {
    setQuery(newQuery);
    setPage(1);
    setMovies([]);
  }

  return (
    <div className={isDarkThemeActive ? "dark" : "light"}>
      <div className="div">
        <NavBar
          onSearch={search}
          isDarkThemeActive={isDarkThemeActive}
          setIsDarkThemeActive={setIsDarkThemeActive}
        />
        <Slider />
        <MovieList movies={movies} />
        {loading && <Loader />}
        {page !== totalPages && <LoaderBtn onClick={loadMore} />}
      </div>
    </div>
  );
}

export default App;
