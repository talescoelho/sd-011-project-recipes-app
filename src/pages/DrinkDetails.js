import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../context/MainContext';
import { searchBarFetchCockTail } from '../services/theCockTailAPI';

const DrinkDetails = (props) => {
  const [drinkData, setdrinkData] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    const getDrinkDetail = async () => {
      const data = await searchBarFetchCockTail(id, 'drinkId');
      setdrinkData(...data);
    };
    console.log('teste');
    getDrinkDetail();
  }, [id]);

  console.log(drinkData);

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
  } = drinkData;
  const ingredientsName = [];
  const ingredientsMeasure = [];
  const maxIngredients = 20;

  function listIngredients() {
    const list = [];
    for (let index = 1; drinkData[`strIngredient${index}`] !== null; index += 1) {
      list.push(
        `${drinkData[`strIngredient${index}`]} - ${drinkData[`strMeasure${index}`]}`,
      );
    }
    return list;
  }

  return (
    <section>
      <img data-testid="recipe-photo" src={ strDrinkThumb } alt={ strDrink } />
      <h2 data-testid="recipe-title">{ strDrink }</h2>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h4 data-testid="recipe-category">{ strCategory }</h4>
      <ol>

        {
          listIngredients().map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${ingredient}` }
            </li>
          ))
        }
      </ol>
      <p data-testid="instruction">{strInstructions}</p>
      <p data-testid="-recomendation-card" />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </section>
  );
};

DrinkDetails.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default DrinkDetails;
