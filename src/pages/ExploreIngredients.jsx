import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../components';
import { useTheme, useIngredients, fetchIngredients } from '../hooks';

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

  return (
    <Layout title="Explorar Ingredientes">
      <main style={ styles.main }>
        <ol>
          {ingredients && ingredients.slice(0, MagicalIgredientsNumber)
            .map((item, index) => (
              <li data-testid={ `${index}-ingredient-card` } key={ item.strIngredient1 }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png` }
                  alt={ item.strIngredient1 }
                />
                <h2 data-testid={ `${index}-card-name` }>{ item.strIngredient1 }</h2>
              </li>
            ))}
        </ol>
        { console.log(ingredients) }
      </main>
    </Layout>
  );
}

export default ExploreIngredients;
