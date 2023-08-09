import Rating from "@mui/material/Rating";
const Rate = ({ rating }) => {
  return (
    <Rating
      name="half-rating-read"
      defaultValue={rating / 2}
      precision={0.5}
      readOnly
      max={5}
    />
  );
};
export default Rate;
