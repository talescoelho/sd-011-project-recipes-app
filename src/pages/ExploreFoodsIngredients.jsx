import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, useIngredients, fetchIngredients, fetchRecipes } from '../hooks';

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
    dispatch(fetchIngredients({ category: 'meals' }));
  }, [dispatch]);

  const fetchIngredientsMain = (item) => {
    dispatch(fetchRecipes({ category: 'ingrediente', searchTerm: item }));
  };

  return (
    <Layout title="Explorar Ingredientes">
      <main style={ styles.main }>
        <ol>
          {ingredients && ingredients.slice(0, MagicalIgredientsNumber)
            .map((item, index) => (
              <Link
                to="/comidas"
                key={ item.strIngredient }
                onClick={ () => fetchIngredientsMain(item.strIngredient) }
              >
                <li data-testid={ `${index}-ingredient-card` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
                    alt={ item.strIngredient }
                  />
                  <h2 data-testid={ `${index}-card-name` }>{ item.strIngredient }</h2>
                </li>
              </Link>
            ))}
        </ol>
      </main>
    </Layout>
  );
}

export default ExploreIngredients;
