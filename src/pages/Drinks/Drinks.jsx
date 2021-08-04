import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';
import styles from './Drinks.module.css';
import { fetchDrink } from '../../redux/actions';
import DrinksCategoriesComponent from './DrinksComponents/DrinksCategoriesComponent';

function Drinks({ match, location }) {
  const { isLoading, drinks } = useSelector((state) => state.Drinks);
  const { data, render } = useSelector((state) => state.Filter);
  const { drinksByCategories, toogle } = useSelector((state) => state.DrinksByCategories);
  const dispatch = useDispatch();
  const mn = 12;

  React.useEffect(() => {
    async function getDrinks(url) {
      await dispatch(fetchDrink(url));
    }
    if (location.ingredient) {
      console.log(location.ingredient);
      getDrinks(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${location.ingredient}`);
    } else {
      getDrinks('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    }
  }, [dispatch, location.ingredient]);

  function renderDrinks() {
    if (render && data.drinks) {
      return (
        <div className={ styles.drinksCardContainer }>
          {data.drinks && data.drinks.filter((_, index) => index < mn)
            .map((item, index) => (
              <Link
                key={ index }
                to={ `/bebidas/${item.idDrink}` }
              >
                <div
                  key={ index }
                  data-testid={ `${index}-recipe-card` }
                  className={ styles.cardDiv }
                >
                  <img
                    src={ item.strDrinkThumb }
                    alt="thumbnail"
                    data-testid={ `${index}-card-img` }
                    className={ styles.cardImg }
                  />
                  <p
                    data-testid={ `${index}-card-name` }
                  >
                    {item.strDrink}
                  </p>
                </div>

              </Link>
            ))}
        </div>
      );
    } if (render && !isLoading && !data.drinks) {
      // eslint-disable-next-line no-alert
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      return null;
    }
    return (
      <div className={ styles.drinksCardContainer }>
        {drinks.drinks && drinks.drinks.filter((_, index) => index < mn)
          .map((item, index) => (
            <Link
              key={ index }
              to={ `/bebidas/${item.idDrink}` }
            >
              <section
                key={ index }
                data-testid={ `${index}-recipe-card` }
                className={ styles.cardDiv }
              >
                <img
                  src={ item.strDrinkThumb }
                  alt="thumbnail"
                  data-testid={ `${index}-card-img` }
                  className={ styles.cardImg }
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  {item.strDrink}
                </p>
              </section>
            </Link>
          ))}
      </div>
    );
  }

  function renderByCategories() {
    return (
      <div className={ styles.drinksCardContainer }>
        {drinksByCategories.drinks && drinksByCategories.drinks
          .filter((_, index) => index < mn)
          .map((item, index) => (
            <Link
              to={ `/bebidas/${item.idDrink}` }
              key={ index }
              data-testid={ `${index}-recipe-card` }
              className={ styles.cardDiv }
            >
              <div>
                <img
                  src={ item.strDrinkThumb }
                  alt="thumbnail"
                  data-testid={ `${index}-card-img` }
                  className={ styles.cardImg }
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  {item.strDrink}
                </p>
              </div>
            </Link>
          ))}
      </div>
    );
  }

  if (isLoading) {
    return (<h1>Carregando...</h1>);
  }

  return (
    <div className={ styles.drinksContainer }>
      <Header title="Bebidas" glass="true" match={ match } />
      <DrinksCategoriesComponent />
      {toogle ? renderByCategories() : renderDrinks()}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    ingredient: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Drinks;
