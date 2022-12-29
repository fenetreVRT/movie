import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const apiKey = import.meta.env.VITE_API_KEY;

function SearchResult() {
  const { query } = useParams();
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );

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
  //.filter out results
  if (data) {
    if (data.results?.length === 0) {
      return <h2>No results for {query}</h2>;
    }
    return (
      <div className="search-page">
        {data.results
          ?.filter((result) => result.poster_path)
          .map((result) => {
            return (
              <div className="search-result" key={query + result.id}>
                <Link to={"/movie/" + result.id}>
                  <article>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                      alt={result.title}
                    />
                    <h3>{result.title}</h3>
                  </article>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}

export default SearchResult;
