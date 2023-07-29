import { style } from "@mui/system";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1 className="FilmFinderLogo">
        <span className="FirstWord">Film</span>
        <span className="SecondWord">Finder</span>
      </h1>
      <div className="navigation">
        <a
          href="https://www.themoviedb.org/?language=uk"
          className="NavBarText"
        >
          Home
        </a>
        <a
          href="https://www.themoviedb.org/movie?language=uk"
          className="NavBarText"
        >
          Movies
        </a>
        <a href="https://developer.themoviedb.org/docs" className="NavBarText">
          API
        </a>
      </div>
    </div>
  );
};
export default NavBar;
