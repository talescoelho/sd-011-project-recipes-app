import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helper/testConfig';
import * as requestMenu from '../../services/requestMenu';
import mealsFiltersByAll from '../mocks/meals/mockFilterMealsByAll';
import mealRecipeDetails from '../mocks/meals/mockMealRecipeDetails';
import drinksFiltersByAll from '../mocks/drinks/mockFilterDrinksByAll';
import drinkRecipeDetails from '../mocks/drinks/mockDrinkRecipeDetails';
import App from '../../App';

jest
  .spyOn(requestMenu, 'searchMealByName')
  .mockImplementation(() => Promise.resolve(mealsFiltersByAll));

jest
  .spyOn(requestMenu, 'searchDrinkByName')
  .mockImplementation(() => Promise.resolve(drinksFiltersByAll));

jest
  .spyOn(requestMenu, 'mealsRecipeDetails')
  .mockImplementation(() => Promise.resolve(mealRecipeDetails));

jest
  .spyOn(requestMenu, 'drinksRecipeDetails')
  .mockImplementation(() => Promise.resolve(drinkRecipeDetails));

afterEach(() => jest.clearAllMocks());
beforeEach(() => jest.clearAllMocks());

const firstirstIngredientNameAndMeasure = '0-ingredient-name-and-measure';
const secondIngredientNameAndMeasure = '1-ingredient-name-and-measure';
const thirdIngredientNameAndMeasure = '2-ingredient-name-and-measure';
const fourthIngredientNameAndMeasure = '3-ingredient-name-and-measure';
const fifthIngredientNameAndMeasure = '4-ingredient-name-and-measure';
const sixthIngredientNameAndMeasure = '5-ingredient-name-and-measure';
const seventhIngredientNameAndMeasure = '6-ingredient-name-and-measure';
const eighthIngredientNameAndMeasure = '7-ingredient-name-and-measure';
const ninthIngredientNameAndMeasure = '8-ingredient-name-and-measure';
const tenthIngredientNameAndMeasure = '9-ingredient-name-and-measure';
const eleventhIngredientNameAndMeasure = '10-ingredient-name-and-measure';
const twelfthIngredientNameAndMeasure = '11-ingredient-name-and-measure';
const thirteenthIngredientNameAndMeasure = '12-ingredient-name-and-measure';

describe(`35 - Design the screen so that it contains an image of the recipe, the title, 
the category (or whether or not you are alcoholic), a list of ingredients followed by the
quantities, instructions, a "drunk" youtube video, and recommendations`, () => {
  it('Check if the elements described in the prototype exist in the food details screen',
    async () => {
      renderWithRouterAndStore(<App />, { route: '/comidas/52977' });

      expect((await screen.findByTestId('recipe-photo')).tagName).toBe('IMG');
      expect(await screen.findByTestId('recipe-title')).toHaveTextContent('Corba');
      expect(await screen.findByTestId('recipe-category')).toHaveTextContent('Side');
      expect(await screen.findByTestId(firstirstIngredientNameAndMeasure))
        .toHaveTextContent('Lentils');
      expect(await screen.findByTestId(firstirstIngredientNameAndMeasure))
        .toHaveTextContent('1 cup');
      expect(await screen.findByTestId(secondIngredientNameAndMeasure))
        .toHaveTextContent('Onion');
      expect(await screen.findByTestId(secondIngredientNameAndMeasure))
        .toHaveTextContent('1 large');
      expect(await screen.findByTestId(thirdIngredientNameAndMeasure))
        .toHaveTextContent('Carrots');
      expect(await screen.findByTestId(thirdIngredientNameAndMeasure))
        .toHaveTextContent('1 large');
      expect(await screen.findByTestId(fourthIngredientNameAndMeasure))
        .toHaveTextContent('Tomato Puree');
      expect(await screen.findByTestId(fourthIngredientNameAndMeasure))
        .toHaveTextContent('1 tbs');
      expect(await screen.findByTestId(fifthIngredientNameAndMeasure))
        .toHaveTextContent('Cumin');
      expect(await screen.findByTestId(fifthIngredientNameAndMeasure))
        .toHaveTextContent('2 tsp');
      expect(await screen.findByTestId(sixthIngredientNameAndMeasure))
        .toHaveTextContent('Paprika');
      expect(await screen.findByTestId(sixthIngredientNameAndMeasure))
        .toHaveTextContent('1 tsp');
      expect(await screen.findByTestId(seventhIngredientNameAndMeasure))
        .toHaveTextContent('Mint');
      expect(await screen.findByTestId(seventhIngredientNameAndMeasure))
        .toHaveTextContent('1/2 tsp');
      expect(await screen.findByTestId(eighthIngredientNameAndMeasure))
        .toHaveTextContent('Thyme');
      expect(await screen.findByTestId(eighthIngredientNameAndMeasure))
        .toHaveTextContent('1/2 tsp');
      expect(await screen.findByTestId(ninthIngredientNameAndMeasure))
        .toHaveTextContent('Black Pepper');
      expect(await screen.findByTestId(ninthIngredientNameAndMeasure))
        .toHaveTextContent('1/4 tsp');
      expect(await screen.findByTestId(tenthIngredientNameAndMeasure))
        .toHaveTextContent('Red Pepper Flakes');
      expect(await screen.findByTestId(tenthIngredientNameAndMeasure))
        .toHaveTextContent('1/4 tsp');
      expect(await screen.findByTestId(eleventhIngredientNameAndMeasure))
        .toHaveTextContent('Vegetable Stock');
      expect(await screen.findByTestId(eleventhIngredientNameAndMeasure))
        .toHaveTextContent('4 cups');
      expect(await screen.findByTestId(twelfthIngredientNameAndMeasure))
        .toHaveTextContent('Water');
      expect(await screen.findByTestId(twelfthIngredientNameAndMeasure))
        .toHaveTextContent('1 cup');
      expect(await screen.findByTestId(thirteenthIngredientNameAndMeasure))
        .toHaveTextContent('Sea Salt');
      expect(await screen.findByTestId(thirteenthIngredientNameAndMeasure))
        .toHaveTextContent('Pinch');
      expect(await screen.findByTestId('instructions'))
        .toHaveTextContent(`Pick through your lentils for any foreign debris, rinse them 
      2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your 
      lentils into a solid block that you’ll have to break up later In a large pot 
      over medium-high heat, sauté the olive oil and the onion with a pinch of salt for 
      about 3 minutes, then add the carrots and cook for another 3 minutes.Add the 
      tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, 
      mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 
      seconds to bloom the spices. Congratulate yourself on how amazing your house now 
      smells. Immediately add the lentils, water, broth, and salt. Bring the soup to a 
      (gentle) boil. After it has come to a boil, reduce heat to medium-low, cover the 
      pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and 
      the carrots are completely cooked. After the soup has cooked and the lentils 
      are tender, blend the soup either in a blender or simply use a hand blender to 
      reach the consistency you desire. Taste for seasoning and add more salt if 
      necessary. Serve with crushed-up crackers, torn up bread, or something else to 
      add some extra thickness.  You could also use a traditional thickener (like 
      cornstarch or flour), but I prefer to add crackers for some texture and 
      saltiness.  Makes great leftovers, stays good in the fridge for about a week.`);
      expect(await screen.findByTestId('video')).toBeInTheDocument();
      expect(await screen.findByTestId('video')).toHaveAttribute('src', 'https://www.youtube.com/embed/VVnZd8A84z4');
      expect(await screen.findByTestId('0-recomendation-card')).toBeInTheDocument();
      expect(await screen.findByTestId('1-recomendation-card')).toBeInTheDocument();
      expect(await screen.findByTestId('2-recomendation-card')).toBeInTheDocument();
      expect(await screen.findByTestId('3-recomendation-card')).toBeInTheDocument();
      expect(await screen.findByTestId('4-recomendation-card')).toBeInTheDocument();
      expect(await screen.findByTestId('5-recomendation-card')).toBeInTheDocument();
    });

  it(`Check if the elements described in the prototype exist in the drink details 
  screen`, async () => {
    renderWithRouterAndStore(<App />, { route: '/bebidas/15997' });

    expect((await screen.findByTestId('recipe-photo')).tagName).toBe('IMG');
    expect(await screen.findByTestId('recipe-title')).toHaveTextContent('GG');
    expect(await screen.findByTestId('recipe-category'))
      .toHaveTextContent('Optional alcohol');
    expect(await screen.findByTestId(firstirstIngredientNameAndMeasure))
      .toHaveTextContent('Galliano');
    expect(await screen.findByTestId(firstirstIngredientNameAndMeasure))
      .toHaveTextContent('2 1/2 shots');
    expect(await screen.findByTestId(secondIngredientNameAndMeasure))
      .toHaveTextContent('Ginger ale');
    expect(await screen.findByTestId(thirdIngredientNameAndMeasure))
      .toHaveTextContent('Ice');
    expect(await screen.findByTestId('instructions'))
      .toHaveTextContent(`Pour the Galliano liqueur over ice. Fill the remainder of the 
      glass with ginger ale and thats all there is to it. You now have a your very own 
      GG.`);
    expect(screen.queryByTestId('video')).not.toBeInTheDocument();
    expect(await screen.findByTestId('0-recomendation-card')).toBeInTheDocument();
    expect(await screen.findByTestId('1-recomendation-card')).toBeInTheDocument();
    expect(await screen.findByTestId('2-recomendation-card')).toBeInTheDocument();
    expect(await screen.findByTestId('3-recomendation-card')).toBeInTheDocument();
    expect(await screen.findByTestId('4-recomendation-card')).toBeInTheDocument();
    expect(await screen.findByTestId('5-recomendation-card')).toBeInTheDocument();
  });
});
