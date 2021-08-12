import React, { useEffect } from 'react';
import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import * as ConcludeRecipe from '../components/common/ConcludeRecipe';
import IngListWithCheckbox from '../components/common/IngredientsListWithCheckbox';
import RecipeInstructions from '../components/common/RecipeInstructions';
import { requestDrinkDetails } from '../redux/actions/recipeDetailsActions';

const DrinkRecipeProgress = ({ dispatch, match, drinkDetails }) => {
  const { params: { id } } = match;
  useEffect(() => {
    dispatch(requestDrinkDetails(id));
    let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes) {
      if (inProgressRecipes.cocktails) {
        if (inProgressRecipes.cocktails[id]) {
          inProgressRecipes = {
            ...inProgressRecipes,
          };
        } else {
          inProgressRecipes = {
            ...inProgressRecipes,
            cocktails: {
              ...inProgressRecipes.cocktails,
              [id]: [],
            },
          };
        }
      } else {
        inProgressRecipes = {
          ...inProgressRecipes,
          cocktails: {
            [id]: [],
          },
        };
      }
    } else {
      inProgressRecipes = {
        cocktails: {
          [id]: [],
        },
      };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [dispatch, id]);
  if (drinkDetails.strInstructions === undefined) return (<span>Carregando...</span>);
  const oldIngredients = [
    drinkDetails.strIngredient1,
    drinkDetails.strIngredient2,
    drinkDetails.strIngredient3,
    drinkDetails.strIngredient4,
    drinkDetails.strIngredient5,
    drinkDetails.strIngredient6,
    drinkDetails.strIngredient7,
    drinkDetails.strIngredient8,
    drinkDetails.strIngredient9,
    drinkDetails.strIngredient10,
    drinkDetails.strIngredient11,
    drinkDetails.strIngredient12,
    drinkDetails.strIngredient13,
    drinkDetails.strIngredient14,
    drinkDetails.strIngredient15,
  ];
  const oldMeasures = [
    drinkDetails.strMeasure1,
    drinkDetails.strMeasure2,
    drinkDetails.strMeasure3,
    drinkDetails.strMeasure4,
    drinkDetails.strMeasure5,
    drinkDetails.strMeasure6,
    drinkDetails.strMeasure7,
    drinkDetails.strMeasure8,
    drinkDetails.strMeasure9,
    drinkDetails.strMeasure10,
    drinkDetails.strMeasure11,
    drinkDetails.strMeasure12,
    drinkDetails.strMeasure13,
    drinkDetails.strMeasure14,
    drinkDetails.strMeasure15,
  ];
  const newIngredients = oldIngredients.filter((ingredient) => ingredient !== null);
  const newMeasures = oldMeasures.filter((measure) => measure !== null);
  const measuresAndIngredients = newIngredients.map((element, index) => {
    if (newMeasures[index] === undefined) return element;
    return `${newMeasures[index]} - ${element}`;
  });
  return (
    <>
      <div>Tela de receita em processo de bebida</div>
      <IngListWithCheckbox
        id={ drinkDetails.idDrink }
        ingredients={ measuresAndIngredients }
        recipeType="cocktails"
      />
      <RecipeInstructions strInstructions={ drinkDetails.strInstructions } />
      <ConcludeRecipe
        id={ drinkDetails.idDrink }
        ingredients={ measuresAndIngredients }
        recipeType="cocktails"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  drinkDetails: state.recipeDetailsReducer.drink,
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
