import React from 'react';
import { string, number } from 'prop-types';

export default function CardRecipes({ index, thumb, title }) {
  return (
    <section data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{title}</p>
      <img data-testid={ `${index}-card-img` } src={ thumb } alt="Receita" />
    </section>
  );
}

CardRecipes.propTypes = {
  index: number,
  thumb: string,
  title: string,
  id: string,
}.isRequired;
