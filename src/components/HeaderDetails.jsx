import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

function HeaderDetails({ foodOrDrink, id }) {
  const { idDetails } = useContext(AppContext);
  const details = idDetails[0];
  /*   const [favorite, setFavorite] = useState(false);

  const favRecipes = {
    id: foodOrDrink === 'Comidas' ? details.idMeal : details.idDrink,
    type: foodOrDrink === 'Comidas' ? 'comida' : 'bebida',
    area: details.strArea || '',
    category: details.strCategory || '',
    alcoholicOrNot: details.strAlcoholic || '',
    name: foodOrDrink === 'Comidas' ? details.strMeal : details.strDrink,
    image: foodOrDrink === 'Comidas' ? details.strMealThumb : details.strDrinkThumb,
  };

  const local = localStorage.getItem('favoriteRecipes');
  const favRec = JSON.parse(local);
  const hasId = local && Object.keys(favRec)
    .map((el) => favRec[el].id).some((x) => x === id);
  // console.log(favRec);

  function handleFavorite() {
    setFavorite(!favorite);
    if (!local) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([favRecipes]));
    } else if (!hasId) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...favRec, favRecipes]));
    } else {
      const filter = favRec.filter((el) => el.id !== id);
      localStorage.removeItem('favoriteRecipes');
      localStorage.setItem('favoriteRecipes', JSON.stringify(filter));
    }
  } */

  return (
    <div>
      <div>
        <h1 data-testid="recipe-title">
          {foodOrDrink === 'Comidas' ? details.strMeal : details.strDrink }
        </h1>
        <ShareButton
          foodOrDrink={ foodOrDrink === 'Comidas' ? 'comidas' : 'bebidas' }
          id={ id }
        />
        <FavoriteButton
          foodOrDrink={ foodOrDrink === 'Comidas' ? 'comidas' : 'bebidas' }
          id={ id }
        />
      </div>
      <h3 data-testid="recipe-category">
        { foodOrDrink === 'Comidas' ? details.strCategory : details.strAlcoholic }
      </h3>
    </div>
  );
}

export default HeaderDetails;

HeaderDetails.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
