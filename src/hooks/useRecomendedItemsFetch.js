import React from 'react';

const useRecomendedItemsFetch = () => {
  const [recomendedData, setRecomendedData] = React.useState(null);
  const [recomendedError, setRecomendedError] = React.useState(null);

  const requestRecomendedApi = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      setRecomendedError(null);
      response = await fetch(url);
      json = await response.json();
    } catch (erro) {
      json = null;
      setRecomendedError('Erro');
    } finally {
      setRecomendedData(json);
    }
  }, []);
  return { recomendedData, recomendedError, requestRecomendedApi };
};

export default useRecomendedItemsFetch;
