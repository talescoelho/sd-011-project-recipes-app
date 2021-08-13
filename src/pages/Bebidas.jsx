import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import searchCase from '../service/apiSearchBar';
import Categories from '../components/Categories';

function Bebidas() {
  const stateReduxSearch = useSelector(({ searchItems }) => searchItems);
  const { dataApi, newFilter } = stateReduxSearch;

  const dispatch = useDispatch();
  const limitSearch = 12;

  React.useEffect(() => {
    async function fetchDidMount() {
      if (!newFilter) dispatch(await searchCase('drink'));
    }
    fetchDidMount();
  }, [dispatch, newFilter]);

  return (
    <div>
      <Header buttonExists title="Bebidas" mealOrDrink="drink" searchOrSelect="search" />
      <Categories mealOrDrink="drink" />
      <div className='container'>
            <div className='row'>      { dataApi.drinks
        && dataApi.drinks
          .map((e, i) => i < limitSearch && (
            <RecipeCards
              comidasOuBebidas="bebidas"
              idItem={ e.idDrink }
              index={ i }
              key={ i }
              src={ e.strDrinkThumb }
              name={ e.strDrink }
            />)) }
                </div>
                </div>

      <Footer />
    </div>
  );
}

export default Bebidas;
