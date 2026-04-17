import React, { useState } from "react";
import "./MovieList.css";

const MovieList = () => {
  const moviesData = [
  { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
  { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
  { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  { title: "Interstellar", genre: "Science Fiction", releaseYear: 2014 },
  { title: "Gladiator", genre: "Action", releaseYear: 2000 },
  { title: "Titanic", genre: "Romance", releaseYear: 1997 },
  { title: "Avengers: Endgame", genre: "Action", releaseYear: 2019 },
  { title: "The Matrix", genre: "Science Fiction", releaseYear: 1999 },
  { title: "Project: Hail Mary", genre: "Sci-Fi", releaseYear: 2026 },
  { title: "Joker", genre: "Crime", releaseYear: 2019 },
];

  const [selectedGenre, setSelectedGenre] = useState("All");

  // Get unique genres
  const genres = ["All", ...new Set(moviesData.map(movie => movie.genre))];

  // Filter movies
  const filteredMovies =
    selectedGenre === "All"
      ? moviesData
      : moviesData.filter(movie => movie.genre === selectedGenre);

  const handleClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="container">
      <h2>Movie List</h2>

      {/* Dropdown Filter */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre === "All" ? "All Genres" : genre}
          </option>
        ))}
      </select>

      {/* Movie Cards */}
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => handleClick(movie.title)}
          >
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;