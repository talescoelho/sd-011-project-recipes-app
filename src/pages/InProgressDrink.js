import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DetailsDrinkHeader from '../components/details/detailsDrink/DetailsDrinkHeader';
import DetailsShareDrinks from '../components/details/detailsDrink/DetailsShareDrinks';
import DetailsDrinkFavoriteButton
  from '../components/details/detailsDrink/DetailsDrinkFavoriteButton';
import DetailsDrinkIngredientList
  from '../components/details/detailsDrink/DetailsDrinkIngredientList';
import '../styles/components/footer.css';
import RecipesContext from '../context/RecipesContext';
import backPage from '../images/arrow-undo-circle-outline.svg';

function InProgressDrink() {
  const {
    drinkId,
    getDrinkId,
    allIngredientsChecked,
  } = useContext(RecipesContext);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getDrinkId(id);
  }, [getDrinkId, id]);

  return (
    <div>
      { (drinkId.idDrink === id) ? (
        <div className="details-container">
          <div className="details-header-btn">
            <img className="back-style" src={ backPage } alt="voltar" />
            <DetailsShareDrinks />
          </div>
          <DetailsDrinkHeader />
          <div className="details-title">
            <div className="details-title-info">
              <div>
                <h3 data-testid="recipe-title">{ drinkId.strDrink }</h3>
                <p data-testid="recipe-category">{ drinkId.strAlcoholic }</p>
              </div>
              <DetailsDrinkFavoriteButton id={ id } />
            </div>
          </div>
          <div className="details-info">
            <DetailsDrinkIngredientList />
            <div>
              <h4>Instruction</h4>
              <p data-testid="instructions">{ drinkId.strInstructions }</p>
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

export default InProgressDrink;
