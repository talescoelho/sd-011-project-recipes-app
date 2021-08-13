import { useState, useEffect } from 'react';

const useDinamicFetch = () => {
  const [url, setUrl] = useState(null);
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        // setIsLoading(true);
        // try {
        const resp = await fetch(url);
        const result = await resp.json();
        setData(result);
        // } catch (e) {
        //   setData([]);
        //   setError(e);
        // }
        // setIsLoading(false);
      };
      fetchData();
    }
  }, [url]);
  // return [{ data, error, isLoading }, setUrl];
  return [data, setUrl];
};

export default useDinamicFetch;
