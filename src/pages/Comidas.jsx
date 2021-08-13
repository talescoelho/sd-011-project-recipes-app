import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import searchCase from '../service/apiSearchBar';
import Categories from '../components/Categories';

function Comidas() {
  const stateReduxSearch = useSelector(({ searchItems }) => searchItems);
  const { dataApi, newFilter } = stateReduxSearch;

  const dispatch = useDispatch();
  const limitSearch = 12;

  React.useEffect(() => {
    async function fetchDidMount() {
      if (!newFilter) dispatch(await searchCase('meal'));
    }
    fetchDidMount();
  }, [dispatch, newFilter]);
  return (
    <div>
      <Header buttonExists title="Comidas" mealOrDrink="meal" searchOrSelect="search" />
      <Categories mealOrDrink="meal" />
      <div className='container'>
            <div className='row'>
      { dataApi.meals
        && dataApi.meals
          .map((e, i) => i < limitSearch && (
            <>
            <RecipeCards
              comidasOuBebidas="comidas"
              idItem={ e.idMeal }
              index={ i }
              key={ i }
              src={ e.strMealThumb }
              name={ e.strMeal }
            />
                       {console.log(typeof e.strMeal)}

            </>
            )) }
             </div>
            </div>
      <Footer />
    </div>
  );
}

export default Comidas;
