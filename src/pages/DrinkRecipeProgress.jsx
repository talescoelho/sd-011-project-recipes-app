import React, { useEffect } from 'react';
import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import ConcludeRecipe from '../components/common/ConcludeRecipe';
import IngListWithCheckbox from '../components/common/IngredientsListWithCheckbox';
import RecipeInstructions from '../components/common/RecipeInstructions';
import { requestMealDetails } from '../redux/actions/recipeDetailsActions';

const DrinkRecipeProgress = ({ dispatch, match, drinkDetails }) => {
  const { params: { id } } = match;
  useEffect(() => {
    dispatch(requestMealDetails(id));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {
        [id]: [],
      },
    }));
    // eslint-disable-next-line
  }, []);
  if (drinkDetails.strInstructions === undefined) return (<span>Carregando...</span>);
  const oldIngredients = [
    `${drinkDetails.strMeasure1} ${drinkDetails.strIngredient1}`,
    `${drinkDetails.strMeasure2} ${drinkDetails.strIngredient2}`,
    `${drinkDetails.strMeasure3} ${drinkDetails.strIngredient3}`,
    `${drinkDetails.strMeasure4} ${drinkDetails.strIngredient4}`,
    `${drinkDetails.strMeasure5} ${drinkDetails.strIngredient5}`,
    `${drinkDetails.strMeasure6} ${drinkDetails.strIngredient6}`,
    `${drinkDetails.strMeasure7} ${drinkDetails.strIngredient7}`,
    `${drinkDetails.strMeasure8} ${drinkDetails.strIngredient8}`,
    `${drinkDetails.strMeasure9} ${drinkDetails.strIngredient9}`,
    `${drinkDetails.strMeasure10} ${drinkDetails.strIngredient10}`,
    `${drinkDetails.strMeasure11} ${drinkDetails.strIngredient11}`,
    `${drinkDetails.strMeasure12} ${drinkDetails.strIngredient12}`,
    `${drinkDetails.strMeasure13} ${drinkDetails.strIngredient13}`,
    `${drinkDetails.strMeasure14} ${drinkDetails.strIngredient14}`,
    `${drinkDetails.strMeasure15} ${drinkDetails.strIngredient15}`,
    `${drinkDetails.strMeasure16} ${drinkDetails.strIngredient16}`,
    `${drinkDetails.strMeasure17} ${drinkDetails.strIngredient17}`,
    `${drinkDetails.strMeasure18} ${drinkDetails.strIngredient18}`,
    `${drinkDetails.strMeasure19} ${drinkDetails.strIngredient19}`,
    `${drinkDetails.strMeasure20} ${drinkDetails.strIngredient20}`,
  ];
  const ingredients = oldIngredients.filter((ingredient) => ingredient !== '');
  return (
    <>
      <div>Tela de receita em processo de bebida</div>
      <IngListWithCheckbox
        id={ drinkDetails.idDrink }
        ingredients={ ingredients }
        recipeType="cocktails"
      />
      <RecipeInstructions strInstructions={ drinkDetails.idDrink } />
      <ConcludeRecipe
        id={ drinkDetails.idDrink }
        ingredients={ ingredients }
        recipeType="cocktails"
      />
    </>
  );
};

const mapStateToProps = ({ recipeDetailsReducer }) => ({
  drinkDetails: recipeDetailsReducer.drink,
});

DrinkRecipeProgress.propTypes = ({
  dispatch: func,
  drinkDetails: shape({
    idDrink: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
  }),
}).isRequired;

export default connect(mapStateToProps)(DrinkRecipeProgress);
