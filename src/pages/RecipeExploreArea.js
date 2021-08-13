import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipesCardsContainer from '../components/RecipesCardsContainer';
import {
  getInitialMealsRecipes, getMealsArea, getMealsByArea } from '../services/theMealAPI';

const RecipeExploreArea = () => {
  const [areaOptions, setAreaOptions] = useState([{ strArea: '' }]);
  const { setData, setLoading } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    getMealsArea()
      .then((result) => {
        setAreaOptions([{ strArea: 'All' }, ...result]);
        getInitialMealsRecipes()
          .then((results) => {
            setData(results);
            setLoading(false);
          });
      });
  }, [setData, setLoading]);

  function handleChange({ target: { value } }) {
    setLoading(true);
    if (value === 'All') {
      getInitialMealsRecipes()
        .then((results) => {
          setData(results);
          setLoading(false);
        });
    } else {
      getMealsByArea(value)
        .then((results) => {
          setData(results);
          setLoading(false);
        });
    }
  }

  return (
    <>
      <Header title="Explorar Origem" isButtonVisible />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ handleChange }
        className="explore-select-input"
      >
        { areaOptions.map((region, index) => (
          <option
            key={ index }
            data-testid={ `${region.strArea}-option` }
            className="explore-option-input"
          >
            { region.strArea }
          </option>
        ))}
      </select>
      <RecipesCardsContainer test="recipe" />
      <FooterMenu />
    </>
  );
};

export default RecipeExploreArea;
