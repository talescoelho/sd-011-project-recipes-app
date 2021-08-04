import React from 'react';
import { useSelector } from 'react-redux';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';
import RenderFoods from './RenderFoods';
import RenderMealsCategoryBtn from './RenderMealsCategoryBtn';

const FoodList = () => {
  document.title = 'Comidas';
  const { receiveData } = useSelector((state) => state.searchBarReducer);
  if (receiveData.meals === null) {
    // eslint-disable-next-line no-alert
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  const maxRender = 12;
  return (
    <div>
      <Header />
      <RenderMealsCategoryBtn />
      { receiveData.length < 1 || !receiveData.meals ? <RenderFoods /> : receiveData.meals
        .filter((item, index) => index < maxRender)
        .map((meal, index) => (
          <div key={ index }>
            <h2 data-testid={ `${index}-card-name` }>{ meal.strMeal }</h2>
            <img
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-recipe-card` }>{ meal.strInstructions }</h3>
          </div>
        )) }
      <FooterMenu />
    </div>
  );
};

export default FoodList;
