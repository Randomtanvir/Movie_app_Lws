/* eslint-disable react/prop-types */
import Star from "../../assets/star.svg";

const MovieRatting = ({ value }) => {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((s, i) => (
        <img key={i} src={Star} width="14" height="14" alt={s} />
      ))}
    </>
  );
};

export default MovieRatting;
