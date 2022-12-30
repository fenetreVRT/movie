import React from "react";
import { Link } from "react-router-dom";
// destructuring assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function MovieCardGrande({ result }) {
  return (
    <div className="movie-card-grande">
      <Link to={"/movie/" + result.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
          alt={result.title}
        />
        <h3>{result.title}</h3>
      </Link>
    </div>
  );
}

export default MovieCardGrande;
