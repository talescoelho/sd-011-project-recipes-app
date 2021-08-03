import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SearchBarContext } from '../context/SearchBar';
import Cards from './Cards';

/* Criei CardsList para renderizar apenas uma vez. Deixei apenas o SearchBarProvider encapsulando o Header e CardsList, já que buscam as mesmas informações */

export default function CardsList(props) {
  const { dataValues } = useContext(SearchBarContext);
  const { fetchType } = props;
  const MAX_CARDS = 12;

  if (dataValues && dataValues.length > 0) { // Ver lógica para redirecionar
    return dataValues.slice(0, MAX_CARDS).map((eachRecipe, index) => (
      <Cards
        recipe={ eachRecipe }
        type={ fetchType }
        index={ index }
        key={ index }
      />
    ));
  }
  return <div>Não há itens</div>;
}

CardsList.propTypes = {
  fetchType: PropTypes.string,
}.isRequired;
