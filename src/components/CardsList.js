import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SearchBarContext } from '../context/SearchBar';
import Cards from './Cards';

export default function CardsList(props) {
  const { dataValues } = useContext(SearchBarContext);
  const { fetchType } = props;
  const MAX_CARDS = 12;

  if (dataValues && dataValues.length > 0) {
    return (
      <div
        style={ { marginTop: '20px' } }
      >
        { dataValues.slice(0, MAX_CARDS).map((eachRecipe, index) => (<Cards
          recipe={ eachRecipe }
          type={ fetchType }
          index={ index }
          key={ index }
        />
        ))}
      </div>
    );
  }
  return <div>Não há itens</div>;
}

CardsList.propTypes = {
  fetchType: PropTypes.string,
}.isRequired;
