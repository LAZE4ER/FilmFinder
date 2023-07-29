import { Card, CardContent, CardMedia } from "@mui/material";
import { style } from "@mui/system";
import Overview from "./Overview";
const MovieListItem = ({ movie, key }) => {
  return (
    <Card className="FilmCard">
      <CardMedia
        component={"img"}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
        title={movie.title}
        key={key}
        className="Image"
      />
      <CardContent>
        <h1 className="CardTitle">{movie.title}</h1>

        <Overview movieOverview={movie.overview} />
      </CardContent>
    </Card>
  );
};
export default MovieListItem;
