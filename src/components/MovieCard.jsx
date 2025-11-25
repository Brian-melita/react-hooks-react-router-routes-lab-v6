import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title } = movie;

  return (
    <article>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    </article>
  );
}

export default MovieCard;
