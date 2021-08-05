import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import 

export default function ProductRenderHelper(
  data,
  typeFilter,
  typeFilterKey,
  maxArrayProducts,
) {
  const infos = {
    id: `id${typeFilter}`,
    str: `str${typeFilter}`,
    thumb: `str${typeFilter}Thumb`,
  };

  const { pathname } = useLocation();

  if (data.location !== pathname) {
    return <p>Loading</p>;
  }
  if (
    data
      .results[typeFilterKey]
      .length === 1) {
    const product = data.results[typeFilterKey][0];
    return <Redirect to={ `${pathname}/${product[infos.id]}` } />;
  }
  return (
    data
      .results[typeFilterKey]
      .slice(0, maxArrayProducts)
      .map((product, index) => (
        <Link to={ `${pathname}/${product[infos.id]}` } key={ index }>
          <div data-testid={ `${index}-recipe-card` }>
            <img
              src={ product[infos.thumb] }
              alt="comida_principal"
              data-testid={ `${index}-card-img` }
              width="50px"
            />
            <p data-testid={ `${index}-card-name` }>{product[infos.str]}</p>
          </div>
        </Link>
      ))
  );
}
