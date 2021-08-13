import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFoodsInitial } from '../../../Services/ApiFood';
import HeaderExpFoodsOrigin from '../../../Components/headers/HeaderExploreFoodsOrigin';
import LowerMenu from '../../../Components/footer/LowerMenu';

const Origen = () => {
  const [originList, setOriginList] = useState([]);
  const [mealsByOrigin, setMealsByOrigin] = useState([]);
  const [originSelected, setOriginSelected] = useState('');

  const handleChange = (event) => {
    setOriginSelected(event.target.value);
  };

  useEffect(() => {
    const getAPI = async () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const { meals } = await fetch(endpoint).then((data) => data.json());
      setOriginList(meals);
    };
    getAPI();
  }, [setOriginList]);

  useEffect(() => {
    const getAPI = async () => {
      if (originSelected !== 'All') {
        const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${originSelected}`;
        const { meals } = await fetch(endpoint).then((data) => data.json());
        setMealsByOrigin(meals);
      } else if (originSelected === 'All') {
        const foodsInitialAPI = await getFoodsInitial();
        setMealsByOrigin(foodsInitialAPI.meals);
      }
    };
    getAPI();
  }, [originSelected]);

  const magicNumber = 12;

  return (
    <div>
      <HeaderExpFoodsOrigin />
      <section>
        <select
          data-testid="explore-by-area-dropdown"
          onChange={ (e) => handleChange(e) }
        >
          { originList && originList.map(({ strArea }, index) => (
            <option
              key={ index }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              { strArea }
            </option>
          ))}
          <option value="All" data-testid="All-option">All</option>
        </select>
      </section>
      <section>
        <ul>
          { mealsByOrigin && mealsByOrigin.slice(0, magicNumber).map((food, i) => (
            <Link key={ food.idMeal } to={ `/comidas/${food.idMeal}` }>
              <li
                data-testid={ `${i}-recipe-card` }
                key={ food.idMeal }
                style={ { display: 'flex' } }
              >
                <img
                  src={ food.strMealThumb }
                  alt={ food.strMeal }
                  data-testid={ `${i}-card-img` }
                  style={ { width: '30px' } }
                />
                <p data-testid={ `${i}-card-name` }>{ food.strMeal }</p>
              </li>
            </Link>
          )) }
        </ul>
      </section>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
};

export default Origen;
