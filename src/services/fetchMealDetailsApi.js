const fetchDetails = (id) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((result) => {
      const obj = result.meals[0];
      Object.keys(obj).forEach((el) => {
        if (obj[el] === null || obj[el].length === 0) {
          delete obj[el];
        }
      });
      return obj;
    })
    .catch((error) => console.log(error))
);

export default fetchDetails;
