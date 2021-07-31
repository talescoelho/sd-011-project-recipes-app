import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function CategoryButtons({ foods, drinks }) {
  useEffect(() => {
    const foodCatEndpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const drinkCatEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    if (foods) {
      const categoryAPI = async (endPoint) => {
        const response = await fetch(endPoint);
        console.log(response.json());
      };
      categoryAPI(foodCatEndpoint);
    }
  }, []);

  return (
    <div>
      <button type="button">My Category Button</button>
    </div>
  );
}

CategoryButtons.propTypes = {
  foods: PropTypes.bool.isRequired,
  drinks: PropTypes.bool.isRequired,
};

export default CategoryButtons;

// const getPlanetsFromAPI = async () => {
//   const { results } = await getPlanets();
//   results.filter((item) => delete item.residents);
//   setPlanetsResults(results);
//   setFilteredResult(results);
// };

// const getPlanets = async () => {
//   const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
//   const response = await fetch(endpoint);
//   const data = await response.json();
//   return response.ok ? Promise.resolve(data) : Promise.reject(data);
// };

// export default getPlanets;
