import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FoodOrigin from '../services/FoodOrigin';
import { getFoodCard } from '../Redux/actions/index';
import Header from '../components/Header';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import '../styles/ExploreByPlace.css';
import { useRouteMatch } from 'react-router-dom';

function ExploreByPlace() {
  const route = useRouteMatch();
  const dispatch = useDispatch();
  console.log(route);

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
    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    const response = await fetch(API_URL);
    const json = await response.json();
    const { meals } = json;
    dispatch(getFoodCard({ filtered: meals }));
  };

  const dropdownOptions = () => (
    <Dropdown.Menu
      data-testid="explore-by-area-dropdown"
      onChange={ ({ target }) => renderingFilterFoodByArea(target.value) }
    >
      <Dropdown.Item data-testid="All-option" value="All">All</Dropdown.Item>
      {
        areaFood.map((area, index) => (
          <Dropdown.Item
            className={ index % 2 === 0 ? 'itemDark' : 'itemLight' }
            key={ index }
            name={ area }
            value={ area }
            data-testid={ [`${area}-option`] }
            onClick={ () => renderingFilterFoodByArea(area) }
          >
            {area}
          </Dropdown.Item>))
      }
    </Dropdown.Menu>
  );

  return (
    <>
      <main className="explore-by-place">
        <Header pageName="Explorar por local de origem" />
        <Dropdown
          className="dropdown"
          data-testid="explore-by-area-dropdown"
        >
          <Dropdown.Toggle
            variant="secondary"
            className="origem"
          >
            Local de origem
          </Dropdown.Toggle>
          {dropdownOptions()}
        </Dropdown>
        <section className="section-place">
          <FoodCard type="meals" />
        </section>
      </main>
      <Footer />
    </>

  );
}

export default ExploreByPlace;
