import React, { useEffect, useState } from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import setFilterByAreaRecipe from '../../../../services/setFilterByAreaRecipe';
import setListArea from '../../../../services/setListArea';

function ComidasArea() {
  const [areas, setAreas] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function setListAreaSuccess(response) {
    setAreas(response);
  }

  async function requestApiListArea() {
    setIsLoading(true);
    const response = await setListArea();
    setListAreaSuccess(response);
    setIsLoading(false);
  }

  function setFilterByAreaRecipeSuccess(result) {
    setRecipes(result);
  }

  async function requestApiFilterArea() {
    setIsLoading(true);
    const result = await setFilterByAreaRecipe();
    setFilterByAreaRecipeSuccess(result);
    setIsLoading(false);
  }

  useEffect(() => {
    requestApiFilterArea();
    requestApiListArea();
  }, []);

  return !isLoading ? (
    <div>
      <Header title="Explorar Origem" hasSearchBar />
      <div>
        <select data-testid="explore-by-area-dropdown">
          {areas.map(({ strArea: area }, index) => (
            <option data-testid={ `${area}-option` } key={ index }>{ area }</option>
          ))}
        </select>
      </div>
      <div>
        {recipes.map(({ strMeal: recipe, strMealThumb: img }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ img }
              alt=""
              data-testid={ `${index}-card-img` }
            />
            <h4 data-testid={ `${index}-card-name` }>{recipe}</h4>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  ) : <span>Loading...</span>;
}

export default ComidasArea;
