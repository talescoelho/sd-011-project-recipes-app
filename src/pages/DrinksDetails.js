import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsDrinkHeader from '../components/details/detailsDrink/DetailsDrinkHeader';
import DetailsShareDrinks from '../components/details/detailsDrink/DetailsShareDrinks';
import
DetailsDrinkFavoriteButton
  from '../components/details/detailsDrink/DetailsDrinkFavoriteButton';
import
DetailsDrinkIngredientList
  from '../components/details/detailsDrink/DetailsDrinkIngredientList';
import
DetailsDrinkInstruction
  from '../components/details/detailsDrink/DetailsDrinkInstruction';
import RecipesContext from '../context/RecipesContext';

function DrinksDetails() {
  const {
    drinkId,
    getDrinkId,
  } = useContext(RecipesContext);

  const { id } = useParams();

  useEffect(() => {
    getDrinkId(id);
  }, [getDrinkId, id]);

  return (
    <div>
      { (drinkId.idDrink === id) ? (
        <div>
          <DetailsDrinkHeader />
          <div>
            <DetailsShareDrinks />
            <DetailsDrinkFavoriteButton />
          </div>
          <div>
            <DetailsDrinkIngredientList />
            <DetailsDrinkInstruction />
          </div>
          <div>
            <h4>recomendações</h4>
            <span data-testid="0-recomendation-card">recomendações test</span>
            <span data-testid="0-recomendation-title">titulo recomendações</span>
          </div>
          <div>
            <button
              type="button"
              data-testid="start-recipe-btn"
            >
              Iniciar
            </button>
          </div>
        </div>
      ) : 'Carregando...' }
    </div>
  );
}

export default DrinksDetails;
