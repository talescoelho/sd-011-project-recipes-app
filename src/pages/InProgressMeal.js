import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsFavoriteButton from '../components/details/DetailsFavoriteButton';
import DetailsIngredientList from '../components/details/DetailsIngredientList';
import DetailsMealHeader from '../components/details/DetailsMealHeader';
import DetailsShareMeals from '../components/details/DetailsShareMeals';
import RecipesContext from '../context/RecipesContext';
import '../styles/components/footer.css';

function InProgressMeal() {
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
            <DetailsFavoriteButton id={ id } />
          </div>
          <div>
            <DetailsIngredientList />
            <div>
              <h4>Instruction</h4>
              <p data-testid="instructions">{ mealId.strInstructions }</p>
            </div>
          </div>
          <button data-testid="finish-recipe-btn" type="button">Finalizar receita</button>
        </div>
      ) : 'Carregando...' }
    </div>
  );
}

export default InProgressMeal;
