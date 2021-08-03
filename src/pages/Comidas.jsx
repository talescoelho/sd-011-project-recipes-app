import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import searchCase from '../service/apiSearchBar';
import Categories from '../components/Categories';

function Comidas() {
  const stateReduxSearch = useSelector(({ searchItems }) => searchItems);
  const { dataApi } = stateReduxSearch;
  const dispatch = useDispatch();
  const limitSearch = 12;

  React.useEffect(() => {
    async function fetchDidMount() {
      dispatch(await searchCase('meal'));
    }
    fetchDidMount();
  }, [dispatch]);

  return (
    <div>
      <Header buttonExists title="Comidas" mealOrDrink="meal" searchOrSelect="search" />
      <Categories mealOrDrink="meal" />
      {dataApi.meals
        && dataApi.meals
          .map((e, i) => i < limitSearch && (
            <RecipeCards
              comidasOuBebidas="comidas"
              idItem={ e.idMeal }
              index={ i }
              key={ i }
              src={ e.strMealThumb }
              name={ e.strMeal }
            />))}
      <Footer />
    </div>
  );
}

export default Comidas;
