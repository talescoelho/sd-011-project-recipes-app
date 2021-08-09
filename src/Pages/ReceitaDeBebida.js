import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';
import requestByMeal, { requestDrinkById } from '../Services/Data';
import renderIngredients from '../components/Ingredients';
import StartButton from '../components/StartButton';
import FavoriteButton from '../components/FavoriteButton';
import SharedButton from '../components/SharedButton';

function ReceitaDeBebidas({ match }) {
  const [data, setData] = useState([]);
  const [recomm, setRecomm] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const pathToCopy = history.location.pathname;
  const { id } = match.params;

  useEffect(() => {
    (async function resolved() {
      const resolve = await requestDrinkById(id);
      const resolveRecomm = await requestByMeal();
      setData(resolve);
      setRecomm(resolveRecomm);
      setLoading(false);
    }());
  }, [id]);

  function renderButtons(item) {
    const DrinkToFav = data.drinks[0];
    const favoriteRecipes = {
      id: DrinkToFav.idDrink,
      type: 'bebida',
      area: '',
      category: DrinkToFav.strCategory,
      alcoholicOrNot: DrinkToFav.strAlcoholic,
      name: DrinkToFav.strDrink,
      image: DrinkToFav.strDrinkThumb,
    };

    return (
      <>
        <SharedButton
          path={ `http://localhost:3000${pathToCopy}` }
          dataTest="share-btn"
          style={ { width: 25 } }

        />

        <FavoriteButton
          id={ item.idDrink }
          favoriteRecipes={ favoriteRecipes }
          dataTest="favorite-btn"
          style={ { width: 25 } }

        />
      </>
    );
  }

  function AlcoholVerify(item) {
    if (item.strAlcoholic) {
      return <h5 data-testid="recipe-category">{item.strAlcoholic}</h5>;
    }
  }

  function mapRecomm(param) {
    const { meals } = param;
    const magicNumber = 6;
    return meals
      .filter((_, index) => index < magicNumber)
      .map((item, index) => {
        if (index === 0) {
          return (
            <div key={ index }>
              <div
                data-testid={ `${index}-recomendation-card` }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ item.strMealThumb }
                  alt={ `imagem de ${item}` }
                  id={ item.idMeal }
                  style={ { width: 25 } }

                />
                <p data-testid={ `${index}-recomendation-title` }>{item.strMeal}</p>
              </div>
              <div
                data-testid={ `${index + 1}-recomendation-card` }
              >
                <img
                  data-testid={ `${index + 1}-card-img` }
                  src={ meals[index + 1].strMealThumb }
                  alt={ `imagem de ${meals[index + 1]}` }
                  id={ meals[index + 1].idMeal }
                  style={ { width: 25 } }

                />
                <p
                  data-testid={ `${index + 1}-recomendation-title` }
                >
                  {meals[index + 1].strMeal}
                </p>
              </div>
            </div>
          );
        }
        if (index !== 1) {
          return (
            <div
              className="carousel-item"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ item.strMealThumb }
                alt={ `imagem de ${item}` }
                id={ item.idMeal }
                style={ { width: 25 } }

              />
              <p data-testid={ `${index}-recomendation-title` }>{item.strMeal}</p>
            </div>
          );
        }
        return null;
      });
  }

  function mapData(param) {
    const { drinks } = param;
    return drinks
      .map((item, index) => {
        const path = `/bebidas/${item.idDrink}`;
        if (path === history.location.pathname) {
          return (
            <div key={ index }>
              <img
                src={ item.strDrinkThumb }
                data-testid="recipe-photo"
                alt={ item.strDrink }
                style={ { width: 25 } }
              />
              <h3 data-testid="recipe-title">{item.strDrink}</h3>
              {renderButtons(item)}
              {AlcoholVerify(item)}
              <label htmlFor="ingredients-list">
                Ingredientes:
                <ul id="ingredients-list">
                  {renderIngredients(item)}
                </ul>
              </label>
              <label htmlFor="instructions">
                Instruções de preparo:
                <p data-testid="instructions">{item.strInstructions}</p>
              </label>
              <p>Recomendações: </p>
              {mapRecomm(recomm)}
              {StartButton('bebidas', item, history)}
            </div>
          );
        }
        return null;
      });
  }

  return (
    <div>
      {
        loading
          ? 'Carregando...'
          : (mapData(data))
      }
    </div>
  );
}

ReceitaDeBebidas.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }),
  }),
}.isRequired;

export default ReceitaDeBebidas;
