import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie, index }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <span className="rating">{movie.rating}</span>

        <Link to={`/movie/${index}`}>view more details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
