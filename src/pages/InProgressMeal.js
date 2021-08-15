import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DetailsFavoriteButton from '../components/details/DetailsFavoriteButton';
import DetailsIngredientList from '../components/details/DetailsIngredientList';
import DetailsMealHeader from '../components/details/DetailsMealHeader';
import DetailsShareMeals from '../components/details/DetailsShareMeals';
import RecipesContext from '../context/RecipesContext';
import '../styles/components/footer.css';
import backPage from '../images/arrow-undo-circle-outline.svg';

function InProgressMeal() {
  const {
    mealId,
    getMealId,
    allIngredientsChecked,
  } = useContext(RecipesContext);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMealId(id);
  }, [getMealId, id]);

  return (
    <div>
      { (mealId.idMeal === id) ? (
        <div className="details-container">
          <div className="details-header-btn">
            <img className="back-style" src={ backPage } alt="voltar" />
            <DetailsShareMeals />
          </div>
          <DetailsMealHeader />
          <div className="details-title">
            <div className="details-title-info">
              <div>
                <h3 data-testid="recipe-title">{ mealId.strMeal }</h3>
                <p data-testid="recipe-category">{ mealId.strCategory }</p>
              </div>
              <DetailsFavoriteButton id={ id } />
            </div>
          </div>
          <div className="details-info">
            <DetailsIngredientList />
            <div>
              <h4>Instruções</h4>
              <p data-testid="instructions">{ mealId.strInstructions }</p>
            </div>
          </div>
          <button
            data-testid="finish-recipe-btn"
            type="button"
            onClick={ () => {
              history
                .push('/receitas-feitas');
            } }
            disabled={ allIngredientsChecked }
          >
            Finalizar receita
          </button>
        </div>
      ) : 'Carregando...' }
    </div>
  );
}

export default InProgressMeal;
