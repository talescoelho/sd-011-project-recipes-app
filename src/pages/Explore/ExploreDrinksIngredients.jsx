import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreDrinksIngredients({ match }) {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const magicNumber = 12;
    const fetchDrinkIngredients = () => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then((response) => response.json())
        .then((data) => setIngredients(data.drinks
          .filter((_, index) => index < magicNumber)));
    };
    fetchDrinkIngredients();
  }, []);
  return (
    <>
      <Header title="Explorar Ingredientes" match={ match } />
      <div>
        {ingredients.map((item, index) => (
          <Link
            key={ index }
            to={ { pathname: '/bebidas', ingredient: item.strIngredient1 } }
          >
            <div
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
                data-testid={ `${index}-card-img` }
                alt="ingredient"
              />

              <h1
                data-testid={ `${index}-card-name` }
              >
                {item.strIngredient1}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

ExploreDrinksIngredients.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ExploreDrinksIngredients;
