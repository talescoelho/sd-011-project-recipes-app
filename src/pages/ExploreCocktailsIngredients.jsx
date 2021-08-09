import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, useIngredients, fetchIngredients, fetchCocktails } from '../hooks';

function ExploreIngredients() {
  const { colors } = useTheme();
  const { ingredients } = useIngredients();
  const dispatch = useDispatch();
  const MagicalIgredientsNumber = 12;
  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  useEffect(() => {
    dispatch(fetchIngredients({ category: 'drinks' }));
  }, [dispatch]);

  const fetchIngredientsMain = (item) => {
    dispatch(fetchCocktails({ category: 'ingrediente', searchTerm: item }));
  };

  return (
    <Layout title="Explorar Ingredientes">
      <main style={ styles.main }>
        <ol>
          {ingredients && ingredients.slice(0, MagicalIgredientsNumber)
            .map((item, index) => (
              <Link
                to="/bebidas"
                key={ item.strIngredient1 }
                onClick={ () => fetchIngredientsMain(item.strIngredient1) }
              >
                <li data-testid={ `${index}-ingredient-card` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
                    alt={ item.strIngredient1 }
                  />
                  <h2 data-testid={ `${index}-card-name` }>{ item.strIngredient1 }</h2>
                </li>
              </Link>
            ))}
        </ol>
      </main>
    </Layout>
  );
}

export default ExploreIngredients;
