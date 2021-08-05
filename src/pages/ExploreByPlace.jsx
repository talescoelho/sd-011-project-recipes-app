import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import FoodOrigin from '../services/FoodOrigin';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ExploreByPlace.css';

function ExploreByPlace() {
  const foodLength = 12;
  const history = useHistory();
  console.log(history);

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
    console.log(json);
  };
  const dropdownOptions = () => (
    <Dropdown.Menu
      variant="dark"
      className="item"
    >
      {
        areaFood.map((area, index) => (
          index < foodLength ? (
            <Dropdown.Item
              className={ index % 2 === 0 ? 'itemDark' : 'itemLight' }
              key={ index }
              name={ area }
              value={ area }
              data-testid={ `${area}-option` }
              onClick={ () => renderingFilterFoodByArea(area) }
            >
              {area}
            </Dropdown.Item>)
            : null))
      }
    </Dropdown.Menu>
  );

  return (
    <main>
      <Header pageName="Explorar por local de origem" />
      {dropdownOptions()}
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
      <Footer />
    </main>
  );
}

export default ExploreByPlace;
