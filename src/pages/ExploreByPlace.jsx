import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FoodOrigin from '../services/FoodOrigin';
import { getFoodCard } from '../Redux/actions/index';
import Header from '../components/Header';
import FoodCard from '../components/FoodCard';
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
    console.log(area);
    if (area !== 'All') {
      const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
      const response = await fetch(API_URL);
      const json = await response.json();
      const { meals } = json;
      dispatch(getFoodCard({ filtered: meals, selectedCategory: 'meals' }));
    }
    if (area === 'All') {
      dispatch(getFoodCard({ filtered: '' }));
    }
  };

  const dropdownOptions = () => (
    <select
      className="dropdown"
      data-testid="explore-by-area-dropdown"
      onChange={ ({ target }) => renderingFilterFoodByArea(target.value) }
    >
      <option
        data-testid="All-option"
        name="All"
        value="All"
        onClick={ () => renderingFilterFoodByArea('All') }
      >
        All

      </option>

      { areaFood.map((area, index) => (
        <option
          className={ index % 2 === 0 ? 'itemDark' : 'itemLight' }
          key={ index }
          name={ area }
          value={ area }
          data-testid={ [`${area}-option`] }
          onClick={ () => renderingFilterFoodByArea(area) }
        >
          {area}
        </option>))}
    </select>
  );

  return (
    <>
      <main className="explore-by-place">
        <Header pageName="Explorar Origem" />
        {dropdownOptions()}
        <section className="section-place">
          <FoodCard type="meals" />
        </section>
      </main>
      <Footer />
    </>

  );
}

export default ExploreByPlace;
