
import MovieListItem from "./MovieListItem";
const MovieList = ({ movies }) => {
  return (
    <ul className="MovieList">
      {movies.map((movie) => (
        <li key={movie.id} className="Item">
          <MovieListItem movie={movie} />
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
