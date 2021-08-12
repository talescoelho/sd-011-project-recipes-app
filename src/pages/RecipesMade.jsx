import React, { useState, useRef, useEffect } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, useLocalStorage } from '../hooks';
import shareIcon from '../images/shareIcon.svg';

function RecipesMade() {
  const { colors } = useTheme();
  const [handleShareLink, sethanleShareLink] = useState(false);
  const [filteredCompleteRecipes, setFilteredCompleteRecipes] = useState([]);
  const storedRecipes = useRef([]);
  const { getDoneRecipes } = useLocalStorage();
  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  useEffect(() => {
    // console.log(filteredCompleteRecipes);
  });

  useEffect(() => {
    storedRecipes.current = getDoneRecipes();
    console.log(storedRecipes.current);
    setFilteredCompleteRecipes([...storedRecipes.current]);
  }, [getDoneRecipes]);

  const handleShareButton = ({ type, id }) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    sethanleShareLink(true);
    const magicNumberTimer = 2000;
    setTimeout(() => {
      sethanleShareLink(false);
    }, magicNumberTimer);
  };

  const handleClickFilter = ({ target: { value } }) => {
    setFilteredCompleteRecipes(storedRecipes
      .current.filter(({ type }) => type.includes(value)));
  };

  return (
    <Layout title="Receitas Feitas" noFooter>
      <main style={ styles.main }>

        <button
          type="button"
          value=""
          data-testid="filter-by-all-btn"
          onClick={ (event) => handleClickFilter(event) }
        >
          All
        </button>
        <button
          type="button"
          value="comida"
          data-testid="filter-by-food-btn"
          onClick={ (event) => handleClickFilter(event) }
        >
          Food
        </button>
        <button
          type="button"
          value="bebida"
          data-testid="filter-by-drink-btn"
          onClick={ (event) => handleClickFilter(event) }
        >
          Drinks
        </button>
        <ul>
          { console.log(filteredCompleteRecipes) }
          {filteredCompleteRecipes.map((recipes, index) => (
            <li key={ recipes.id }>
              <Link to={ `${recipes.type}s/${recipes.id}` }>
                <img
                  style={ { width: '1px' } }
                  alt={ recipes.name }
                  data-testid={ `${index}-horizontal-image` }
                  src={ recipes.image }
                />
                <h2
                  data-testid={ `${index}-horizontal-name` }
                >
                  { recipes.name }
                </h2>
              </Link>
              <h3
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${recipes.area || recipes.alcoholicOrNot} - ${recipes.category}` }
              </h3>
              <h2
                data-testid={ `${index}-horizontal-done-date` }
              >
                { recipes.doneDate }
              </h2>
              <input
                alt="share button"
                type="image"
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                onClick={ () => handleShareButton(recipes) }
              />
              {handleShareLink && <span>Link copiado!</span>}
              {recipes.tags.map((tags, indextags) => (
                <h3
                  data-testid={ `${index}-${tags}-horizontal-tag` }
                  key={ indextags }
                >
                  { tags }
                </h3>
              ))}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default RecipesMade;
