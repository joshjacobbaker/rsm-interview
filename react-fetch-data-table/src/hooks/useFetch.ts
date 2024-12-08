import { useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'error' | 'success';

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>({} as T);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
  const savedData = localStorage.getItem(url);
  if (savedData) {
    setData(JSON.parse(savedData));
    setStatus('success');
    return
  }

    setStatus('loading');
    fetch(url)
      .then((response) => response.json())
      .then((data: T) => {
        localStorage.setItem(url, JSON.stringify(data));
        setData(data);
        setStatus('success');
      }).catch(() => {
        setStatus('error');
      });
  }, [url]);

  return { data, status, setStatus };
}