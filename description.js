import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies[id];

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <button onClick={() => navigate("/")}>home page</button>
    </div>
  );
};

export default MovieDescription;
