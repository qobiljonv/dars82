import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoding(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Nimadir xari ketdi !");
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoding(false);
      }
    };
    getData();
  }, [url]);

  return { data, loding, error };
};
