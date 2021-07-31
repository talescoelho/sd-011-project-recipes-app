import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';
import styles from './Foods.module.css';

function Foods({ match }) {
  const { Filter: { isLoading, data } } = useSelector((state) => state);
  const mn = 12;
  if (isLoading) {
    return (<h1>Carregando...</h1>);
  }

  if (!isLoading && !data.meals) {
    // eslint-disable-next-line no-alert
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return (
    <div className={ styles.foodsContainer }>
      <Header title="Comidas" glass="true" match={ match } />
      <div className={ styles.foodsCardContainer }>
        {data.meals && data.meals.filter((_, index) => index < mn).map((item, index) => (
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Foods;
