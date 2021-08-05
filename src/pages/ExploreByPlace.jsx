import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFoodCard } from '../Redux/actions/index';
import FoodOrigin from '../services/FoodOrigin';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ExploreByPlace.css';

function ExploreByPlace() {
  const dispatch = useDispatch();

  const [areaFood, setAreaFood] = useState([]);

  useEffect(() => {
    const foodByPlaceOrigin = async () => {
      const reqFoodOrigin = await FoodOrigin('meals');

      const nameFood = reqFoodOrigin.map((el) => el.strArea);

      const nameCountry = Object.values(nameFood);

      setAreaFood(nameCountry);
    };
    foodByPlaceOrigin();
  }, []);

  const renderingFilterFoodByArea = async (area) => {
    if (area !== 'All') {
      const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
      const response = await fetch(API_URL);
      const json = await response.json();
      const { meals } = json;
      dispatch(getFoodCard({ filtered: meals }));
    } else {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(URL);
      const json = await response.json();
      const { meals } = json;
      dispatch(getFoodCard({ filtered: meals }));
    }
  };

  const dropdownOptions = () => (
    <select
      data-testid="explore-by-area-dropdown"
      onChange={ ({ target }) => renderingFilterFoodByArea(target.value) }
    >
      <option data-testid="All-option" value="All">All</option>
      {
        areaFood.map((area, index) => (
          <option
            className={ index % 2 === 0 ? 'itemDark' : 'itemLight' }
            key={ index }
            name={ area }
            value={ area }
            data-testid={ `${area}-option` }
          >
            {area}
          </option>))
      }
    </select>
  );

  return (
    <div>
      <main>
        <Header pageName="Explorar por local de origem" />
        {dropdownOptions()}
        <Footer />
      </main>
      <FoodCard type="meals" />
    </div>
  );
}

export default ExploreByPlace;
