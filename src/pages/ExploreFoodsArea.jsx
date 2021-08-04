import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';
import { exploreFoodsByArea, exploreArea, fetchFoods } from '../services/API';

function ExploreFoodsArea() {
  const [totalAreas, setTotalAreas] = useState([]);
  const [areaToRender, setAreaToRender] = useState([]);
  const [loading, setLoading] = useState(false);

  const MAX = 12;
  useEffect(() => {
    const fetchAreas = async () => {
      const response = await exploreArea();
      setTotalAreas(response);
    };
    fetchAreas();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchFood = async () => {
      const response = await fetchFoods();
      setLoading(false);
      setAreaToRender(response.slice(0, MAX));
    };
    fetchFood();
  }, [setLoading]);

  const fetchAreasToFilter = async (value) => {
    setLoading(true);
    const response = await exploreFoodsByArea(value);
    setAreaToRender(response.slice(0, MAX));
    setLoading(false);
  };

  return (
    <>
      <Header />
      <label htmlFor="area">
        <select
          name="area"
          id="area"
          data-testid="explore-by-area-dropdown"
          onChange={ ({ target: { value } }) => fetchAreasToFilter(value) }
        >
          <option
            data-testid="All-option"
            value="All"
          >
            All
          </option>
          { totalAreas.map(({ strArea }) => (
            <option
              value={ strArea }
              data-testid={ `${strArea}-option` }
              key={ strArea }
            >
              { strArea }
            </option>)) }

        </select>
      </label>
      <section className="recipes-container">
        {loading ? <ReactBootStrap.Spinner animation="border" />
          : areaToRender.map((food, index) => (
            <div
              className="recipe-card"
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <Link to={ `/comidas/${food.idMeal}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ food.strMealThumb }
                  alt={ food.strMeal }
                  width="200px"
                />
                <p
                  className="card-name"
                  data-testid={ `${index}-card-name` }
                >
                  {food.strMeal}
                </p>
              </Link>
            </div>
          ))}
      </section>
      <LowerMenu />
    </>
  );
}

export default ExploreFoodsArea;
