import React from 'react';

const useDetailsFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      response = await fetch(url);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('Erro');
    } finally {
      setData(json);
    }
  }, []);
  return { data, error, request };
};

export default useDetailsFetch;
