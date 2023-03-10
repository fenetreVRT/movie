import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  //goes right away when used in a component - also when url is used/changed
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { loading, error, data };
}
