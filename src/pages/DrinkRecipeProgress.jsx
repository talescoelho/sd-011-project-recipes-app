import React, { useEffect } from 'react';
import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import ConcludeRecipe from '../components/common/ConcludeRecipe';
import IngredientsListWithCheckbox from
  '../components/common/IngredientsListWithCheckbox';
import RecipeInstructions from '../components/common/RecipeInstructions';
import filterDrinkMeasuresAndIngredients from
  '../helpers/filterDrinkMeasuresAndIngredients';
import { requestDrinkDetails } from '../redux/actions/recipeDetailsActions';

const DrinkRecipeProgress = ({ dispatch, match, drinkDetails }) => {
  const { params: { id } } = match;
  useEffect(() => {
    dispatch(requestDrinkDetails(id));
    let inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );
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
  }, []);
  if (drinkDetails.strInstructions === undefined) return <span>Carregando...</span>;
  const measuresAndIngredients = filterDrinkMeasuresAndIngredients(drinkDetails);
  return (
    <>
      <div>Tela de receita em processo de bebida</div>
      <IngredientsListWithCheckbox
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

DrinkRecipeProgress.propTypes = {
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
}.isRequired;

console.log(typeof DrinkRecipeProgress);

export default connect(mapStateToProps)(DrinkRecipeProgress);
