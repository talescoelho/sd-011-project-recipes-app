import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import { searchById } from '../services/RequestFood';

function Details(props) {
  const { match: { params: { id } } } = props;
  const [initialIdItem, setInitialIdItem] = useState([]);

  async function getDetailsById() {
    const items = await searchById(id);
    setInitialIdItem(items);
  }

  useEffect(() => {
    getDetailsById();
  }, []);

  return (
    <div>
      { initialIdItem ? initialIdItem.length >= 1
        && initialIdItem.map((item, index) => (
          <div key={ index }>
            <img src={ item.strMealThumb } alt={ item.idMeal } width="50px" />
            <p>{ item.idMeal }</p>
            <span>
              Ingredientes
              <p>{ item.strIngredient1 }</p>
              <p>{ item.strIngredient2 }</p>
              <p>{ item.strIngredient3 }</p>
              <p>{ item.strIngredient4 }</p>
              <p>{ item.strIngredient5 }</p>
              <p>{ item.strIngredient6 }</p>
              { item.strIngredient7 ? <p>{ item.strIngredient7 }</p> : '' }
              { item.strIngredient8 ? <p>{ item.strIngredient8 }</p> : '' }
              { item.strIngredient9 ? <p>{ item.strIngredient9 }</p> : '' }
              { item.strIngredient10 ? <p>{ item.strIngredient10 }</p> : '' }
              { item.strIngredient11 ? <p>{ item.strIngredient11 }</p> : '' }
              { item.strIngredient12 ? <p>{ item.strIngredient12 }</p> : '' }
              { item.strIngredient13 ? <p>{ item.strIngredient13 }</p> : '' }
              { item.strIngredient14 ? <p>{ item.strIngredient14 }</p> : '' }
              { item.strIngredient15 ? <p>{ item.strIngredient15 }</p> : '' }
              { item.strIngredient16 ? <p>{ item.strIngredient16 }</p> : '' }
              { item.strIngredient17 ? <p>{ item.strIngredient17 }</p> : '' }
              { item.strIngredient18 ? <p>{ item.strIngredient18 }</p> : '' }
              { item.strIngredient19 ? <p>{ item.strIngredient19 }</p> : '' }
              { item.strIngredient20 ? <p>{ item.strIngredient20 }</p> : '' }
            </span>
            <p>{ item.strInstructions }</p>
            { console.log(item) }
            <ReactPlayer
              width="320px"
              height="240px"
              url={ item.strYoutube }
            />
            <p> Falta fazer o recomendadas</p>
            <button type="button">Iniciar receita</button>
          </div>)) : <p>Loading</p> }
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Details;
