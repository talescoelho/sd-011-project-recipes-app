import PropTypes from 'prop-types';
import React, { useState } from 'react';
import LinkCopy from './LinkCopy';

function ButtonShare({ recipe }) {
  const { recipeType, recipeId } = recipe;
  const [linkCopy, setLinkCopy] = useState(false);

  const handleShareBtn = (foodType, id) => {
    console.log(foodType, id);
    const hostURL = window.location.origin;
    if (foodType === 'meals') {
      navigator.clipboard.writeText(`${hostURL}/comidas/${id}`);
    }
    if (foodType === 'cocktails') {
      navigator.clipboard.writeText(`${hostURL}/bebidas/${id}`);
    }
    return <LinkCopy />;
  };

  const handleLinkMessage = () => {
    setLinkCopy(true);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ () => { handleShareBtn(recipeType, recipeId); handleLinkMessage(); } }
        className="share-btn"
        data-testid="share-btn"
      >
        Share
      </button>
      { linkCopy && <LinkCopy /> }
    </div>
  );
}

ButtonShare.propTypes = {
  recipeId: PropTypes.string,
  recipeType: PropTypes.string,
}.isRequired;

export default ButtonShare;
