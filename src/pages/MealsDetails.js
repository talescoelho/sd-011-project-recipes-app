import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import DetailsFavoriteButton from '../components/details/DetailsFavoriteButton';
import DetailsIngredientList from '../components/details/DetailsIngredientList';
import DetailsMealHeader from '../components/details/DetailsMealHeader';
import DetailsShareMeals from '../components/details/DetailsShareMeals';
import DetailsVideosMeal from '../components/details/DetailsVideosMeal';
import RecipesContext from '../context/RecipesContext';

function MealsDetails() {
  const {
    mealId,
    getMealId,
    drinkRecommend,
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
            <div>
              <h4>Instruction</h4>
              <p data-testid="instructions">{ mealId.strInstructions }</p>
            </div>
            <DetailsVideosMeal />
          </div>
          <div>
            <h4>recomendações</h4>
            <Carousel
              width="100%"
              height="200px"
            >
              {
                drinkRecommend.map((drink, index) => (
                  <Carousel.Item
                    key={ index }
                    data-testid={ `${index}-recomendation-card` }
                  >
                    <img
                      alt="Recomendation"
                      src={ drink.strDrinkThumb }
                    />
                    <Carousel.Caption>
                      <p data-testid={ `${index}-recomendation-title` }>
                        {drink.strDrink}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              }
            </Carousel>
            {/* <span data-testid="0-recomendation-card">recomendações test</span>
            <span data-testid="0-recomendation-title">titulo recomendações</span> */}
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
