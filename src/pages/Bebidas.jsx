import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import searchCase from '../service/apiSearchBar';

function Bebidas() {
  const stateReduxSearch = useSelector(({ searchItems }) => searchItems);
  const { dataApi } = stateReduxSearch;
  const dispatch = useDispatch();
  const limitSearch = 12;

  React.useEffect(() => {
    async function fetchDidMount() {
      dispatch(await searchCase('drink', 'primeiraletra', 'z'));
    }
    fetchDidMount();
    console.log('oi');
  }, [dispatch]);

  return (
    <div>
      <Header buttonExists title="Bebidas" mealOrDrink="drink" />
      {dataApi.drinks
        && dataApi.drinks
          .map((e, i) => i < limitSearch && (
            <RecipeCards
              index={ i }
              key={ i }
              src={ e.strDrinkThumb }
              name={ e.strDrink }
            />))}
      <Footer />
    </div>
  );
}

export default Bebidas;
