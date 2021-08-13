import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import DetailsFavoriteButton from '../components/details/DetailsFavoriteButton';
import DetailsIngredientList from '../components/details/DetailsIngredientList';
import DetailsMealHeader from '../components/details/DetailsMealHeader';
import DetailsShareMeals from '../components/details/DetailsShareMeals';
import DetailsVideosMeal from '../components/details/DetailsVideosMeal';
import RecipesContext from '../context/RecipesContext';
import '../styles/components/footer.css';
import ButtonStartMeal from '../components/details/ButtonStartMeal';
import '../styles/components/details.css';
import backPage from '../images/arrow-undo-circle-outline.svg';

function MealsDetails() {
  const {
    mealId,
    getMealId,
    drinkRecommend,
  } = useContext(RecipesContext);

  const { id } = useParams();
  const maximum = 6;

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
                drinkRecommend.slice(0, maximum).map((drink, index) => (
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
          </div>
          <div>
            <ButtonStartMeal id={ id } type="meals" />
          </div>
        </div>
      ) : 'Carregando...' }
    </div>
  );
}

export default MealsDetails;
