import MoviesCarusell from "../components/MoviesCarusell";
import useFetch from "../hooks/useFetch";
const apiKey = import.meta.env.VITE_API_KEY;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const toprateUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
function Home() {
  //pics them out from useFetch
  const popular = useFetch(popularUrl);
  const toprate = useFetch(toprateUrl);
  return (
    //Gör en till, copy 11 till 16 för top-rate url + rad 7
    <div>
      <MoviesCarusell
        data={popular.data?.results}
        loading={popular.loading}
        error={popular.error}
        title="Popular Movies"
      />

      <MoviesCarusell
        data={toprate.data?.results}
        loading={toprate.loading}
        error={toprate.error}
        title="Toprated Movies"
      />
    </div>
  );
}

export default Home;
