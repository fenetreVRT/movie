import { useParams } from "react-router-dom";

function MoviePage() {
  const { id: paramId } = useParams();
  console.log(paramId);
  return <div>MoviePage</div>;
}

export default MoviePage;
