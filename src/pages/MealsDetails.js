import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsFavoriteButton from '../components/details/DetailsFavoriteButton';
import DetailsIngredientList from '../components/details/DetailsIngredientList';
import DetailsInstruction from '../components/details/DetailsInstruction';
import DetailsMealHeader from '../components/details/DetailsMealHeader';
import DetailsShareMeals from '../components/details/DetailsShareMeals';
import RecipesContext from '../context/RecipesContext';

function MealsDetails() {
  const {
    mealId,
    getMealId,
  } = useContext(RecipesContext);

  const { id } = useParams();

  useEffect(() => {
    getMealId(id);
  }, [getMealId, id]);

  return (
    <div>
      { (mealId.idMeal === id) ? (
        <div>
          <DetailsMealHeader />
          <div>
            <DetailsShareMeals />
            <DetailsFavoriteButton />
          </div>
          <div>
            <DetailsIngredientList />
            <DetailsInstruction />
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

export default MealsDetails;
