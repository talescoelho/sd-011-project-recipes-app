import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, fetchRecipes, fetchAreas, useAreas, useRecipes } from '../hooks';

function ExploreOrigin() {
  const { colors } = useTheme();
  const { areas } = useAreas();
  const { recipes } = useRecipes();
  const [handleSelect, setHandleSelect] = useState('American');
  const magicalNumberRecipes = 12;
  const dispatch = useDispatch();
  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };
  useEffect(() => {
    dispatch(fetchAreas({ category: 'meals' }));
  }, [dispatch]);

  useEffect(() => {
    if (handleSelect !== 'All') {
      dispatch(fetchRecipes({ category: 'food_by_area', searchTerm: handleSelect }));
    } else {
      dispatch(fetchRecipes({ category: 'ingrediente', searchTerm: '' }));
    }
  }, [dispatch, handleSelect]);

  return (
    <Layout title="Explorar Origem" search>
      <main style={ styles.main }>
        <select
          value={ handleSelect }
          data-testid="explore-by-area-dropdown"
          onChange={ ({ target }) => setHandleSelect(target.value) }
        >
          {areas && areas.map((area, index) => (
            <option
              data-testid={ `${area.strArea}-option` }
              key={ index }
            >
              {area.strArea}
            </option>
          ))}
          <option
            data-testid="All-option"
          >
            All
          </option>
        </select>
        <ol>
          {recipes && recipes.slice(0, magicalNumberRecipes)
            .map((meals, index) => (
              <Link
                to={ `/comidas/${meals.idMeal}` }
                key={ meals.idMeal }
              >
                <li data-testid={ `${index}-recipe-card` }>
                  <img
                    alt={ `Foto de uma ${meals.strMeal}` }
                    data-testid={ `${index}-card-img` }
                    src={ meals.strMealThumb }
                  />
                  <h3
                    data-testid={ `${index}-card-name` }
                  >
                    { meals.strMeal }
                  </h3>

                </li>
              </Link>))}
        </ol>
      </main>
    </Layout>
  );
}

export default ExploreOrigin;
