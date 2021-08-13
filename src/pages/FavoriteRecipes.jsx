import React, { useState, useRef, useEffect } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import { Layout, FavoriteButton } from '../components';
import { useTheme, useLocalStorage } from '../hooks';

import shareIcon from '../images/shareIcon.svg';

function FavoriteRecipes() {
  const { colors } = useTheme();
  const { getFavoriteRecipes } = useLocalStorage();
  const [handleShareLink, sethanleShareLink] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const storedRecipes = useRef([]);
  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };
  useEffect(() => {
    storedRecipes.current = getFavoriteRecipes();
    setFavoriteRecipes(storedRecipes.current);
  }, [getFavoriteRecipes]);

  const handleShareButton = ({ type, id }) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    sethanleShareLink(true);
    const magicNumberTimer = 2000;
    setTimeout(() => {
      sethanleShareLink(false);
    }, magicNumberTimer);
  };

  const handleClickFilter = ({ target: { value } }) => {
    setFavoriteRecipes(storedRecipes
      .current.filter(({ type }) => type.includes(value)));
  };

  return (
    <Layout title="Receitas Favoritas" noFooter>
      <main style={ styles.main }>
        { console.log(JSON.parse(localStorage.getItem('favoriteRecipes')))}
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
          {favoriteRecipes.map((recipes, index) => (
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
              <FavoriteButton
                index={ index }
                callback={ () => {
                  setFavoriteRecipes((prev) => prev.filter((r) => r.id !== recipes.id));
                  storedRecipes.current = storedRecipes.current
                    .filter((r) => r.id !== recipes.id);
                } }
                recipe={ recipes }
              />
              <input
                alt="share button"
                type="image"
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                onClick={ () => handleShareButton(recipes) }
              />
              {handleShareLink && <span>Link copiado!</span>}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default FavoriteRecipes;
