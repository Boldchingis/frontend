import { useState, useEffect } from 'react';

export function useAuthFetch(path: string) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5006/${path}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [path]);

  return data;
}