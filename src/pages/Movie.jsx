import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies } from "../db.json"; // adjust path if needed

function Movie() {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <p>Movie not found.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
