import React from 'react';

export default function RenderRecipes({ title, index, srcImage }) {
  // const { typeRecipes, nameRecipes } = props;
  return (
    <div
      className="card-body"
      key={ index }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ srcImage }
        data-testid={ `${index}-card-img` }
        alt="logo"
      />
      <h2 data-testid={ `${index}-card-name` }>
        { title }
      </h2>
    </div>
  );
}
