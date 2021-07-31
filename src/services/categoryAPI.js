const categoryAPI = () => {
  const { results } = await getPlanets();
  results.filter((item) => delete item.residents);
  setPlanetsResults(results);
  setFilteredResult(results);
};

export default categoryAPI;
