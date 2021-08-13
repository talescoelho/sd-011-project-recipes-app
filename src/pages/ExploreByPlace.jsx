import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFoodFilters, fetchFilteredCards } from '../services/FoodOrigin';
import Header from '../components/Header';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import '../styles/ExploreByPlace.css';

function ExploreByPlace() {
  const dispatch = useDispatch();
  const [areaFood, setAreaFood] = useState([]);

  useEffect(() => {
    const foodByPlaceOrigin = async () => {
      const r = await fetchFoodFilters('meals');
      setAreaFood(r);
    };
    foodByPlaceOrigin();
  }, []);

  const dropdownOptions = () => (
    <select
      className="dropdown"
      data-testid="explore-by-area-dropdown"
      onChange={ ({ target }) => dispatch(fetchFilteredCards(target.value)) }
    >
      <option
        data-testid="All-option"
        name="All"
        value="All"
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
        >
          {area}
        </option>))}
    </select>
  );

  return (
    <>
      <main className="explore-by-place">
        <Header renderButton pageName="Explorar Origem" />
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
