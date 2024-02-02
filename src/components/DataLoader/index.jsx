import { useEffect, useState } from 'react';

function useDataLoader(loadData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setIsLoading(true);
    try {
      const data = await loadData();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { data, isLoading, error };
}

export default useDataLoader;
