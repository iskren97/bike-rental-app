import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!url) return;

    setIsFetching(true);
    axios
      .get(url)
      .then(({ data }) => setData(data))
      .catch((error) => setError(error.response.data))
      .finally(() => setIsFetching(false));
  }, [url]);

  return { data, setData, isFetching, error };
};

export default useFetchData;
