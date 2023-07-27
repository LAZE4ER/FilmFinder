import { Card, Typography, CardContent, CardMedia } from "@mui/material";
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
        <Typography className="CardTitle" title={movie.title}>{movie.title}</Typography>
        <Overview movieOverview={movie.overview} />
      </CardContent>
    </Card>
  );
};
export default MovieListItem;
