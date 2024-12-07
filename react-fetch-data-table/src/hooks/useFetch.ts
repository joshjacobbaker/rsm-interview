import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: T) => {
        setData(data);
        setLoading(false);
      }).catch(() => {
        setError(true);
      });
  }, [url]);

  return { data, loading, error };
}