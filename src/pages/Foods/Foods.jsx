import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';
import styles from './Foods.module.css';
import { fetchMeal } from '../../redux/actions';

function Foods({ match }) {
  const { meals, isLoading } = useSelector((state) => state.Meals);
  const dispatch = useDispatch();
  const mn = 12;

  React.useEffect(() => {
    async function getMeals() {
      await dispatch(fetchMeal());
    }
    getMeals();
  }, []);

  if (isLoading) {
    return (<h1>Carregando...</h1>);
  }

  return (
    <div className={ styles.foodsContainer }>
      <Header title="Comidas" glass="true" match={ match } />
      <div className={ styles.foodsCardContainer }>
        {meals.meals && meals.meals.filter((_, index) => index < mn)
          .map((item, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              className={ styles.cardDiv }

            >
              <img
                src={ item.strMealThumb }
                alt="thumbnail"
                data-testid={ `${index}-card-img` }
                className={ styles.cardImg }
              />
              <p
                data-testid={ `${index}-card-name` }
              >
                {item.strMeal}
              </p>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Foods;
