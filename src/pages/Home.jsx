import React from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { movies } from "../pages/Movie"; // adjust path if your data file is different

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <section>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
