import React from "react";
import MovieCardGrande from "./MovieCardGrande";

function MoviesCarusell({ data, loading, error, title }) {
  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return (
      <h1>
        {error.status}: {error.statusText}
      </h1>
    );
  }

  if (data) {
    return (
      <>
        <h2>{title}</h2>
        <div className="carusell">
          {data?.map((result) => {
            return <MovieCardGrande result={result} key={title + result.id} />;
          })}
        </div>
      </>
    );
  }
}

export default MoviesCarusell;
