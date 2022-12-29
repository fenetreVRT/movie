import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const apiKey = import.meta.env.VITE_API_KEY;

function MoviePage({ recent, setRecent }) {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  useEffect(() => {
    if (data) {
      if (!recent.some((viewedMovie) => viewedMovie.id === data.id)) {
        setRecent([data, ...recent].slice(0, 11));
      } else {
        const filteredMovies = recent.filter(
          (filtered) => filtered.id !== data.id
        );
        setRecent([data, ...filteredMovies].slice(0, 11));
      }
    }
  }, [data]);

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
    console.log(data);
    return (
      <div className="movie-page">
        <h1>{data.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
        />
      </div>
    );
  }
}

export default MoviePage;
