import React from 'react';
import { Dropdown } from 'react-bootstrap';
import FoodOrigin from '../services/FoodOrigin';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ExploreByPlace.css';

function ExploreByPlace() {
  const foodByPlaceOrigin = async () => {
    const reqFoodOrigin = await FoodOrigin('meals');

    const nameFood = reqFoodOrigin.map((el) => el.strArea);
    return nameFood;
  };

  foodByPlaceOrigin();
  return (
    <main>
      <Header />
      <Dropdown
        class="dropdown"
        data-testid="explore-by-area-dropdown"
      >
        <Dropdown.Toggle
          variant="secondary"
          class="origem"
        >
          Local de origem
        </Dropdown.Toggle>
        <Dropdown.Menu
          variant="dark"
          class="item"
        >
          <Dropdown.Item
            href="action"
            // data-testid="${area}-option"
          >
            comida1
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Footer />
    </main>
  );
}

export default ExploreByPlace;
