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
        <div>
          <DetailsDrinkHeader />
          <div>
            <DetailsShareDrinks />
            <DetailsDrinkFavoriteButton id={ id } />
          </div>
          <div>
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
