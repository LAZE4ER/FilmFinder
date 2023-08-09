import { style } from "@mui/system";
import SearchMovies from "./SearchMovies";
import ThemeBtn from "./ThemeBtn";
import PropTypes from "prop-types";
const NavBar = ({ onSearch, isDarkThemeActive, setIsDarkThemeActive }) => {
  return (
    <div className="NavBar">
      <h1 className="FilmFinderLogo">
        <span className="FirstWord">Film</span>
        <span className="SecondWord">Finder</span>
      </h1>
      <SearchMovies onSearch={onSearch} />
      <div className="navigation">
        <a
          href="https://www.themoviedb.org/?language=uk"
          className="NavBarText"
        >
          Home
        </a>
        <a href="#MovieList" className="NavBarText">
          Movies
        </a>
        <a href="https://developer.themoviedb.org/docs" className="NavBarText">
          API
        </a>
        <ThemeBtn
          checked={isDarkThemeActive}
          onChange={(e, checked) => setIsDarkThemeActive(checked)}
        />
      </div>
    </div>
  );
};

export default NavBar;
