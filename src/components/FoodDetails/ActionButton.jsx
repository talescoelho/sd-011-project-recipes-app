import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../../images/shareIcon.svg';
import FavoriteIcon from '../../images/whiteHeartIcon.svg';

function ActionButton({ onClick, action }) {
  const iconSrc = action === 'share' ? ShareIcon : FavoriteIcon;

  return (
    <button
      data-testid={ `${action}-btn` }
      type="button"
      title={ `${action} the recipe` }
      onClick={ onClick }
    >
      <img src={ iconSrc } alt="" />
    </button>
  );
}

export default ActionButton;

ActionButton.propTypes = {
  onClick: PropTypes.func,
  action: PropTypes.oneOf(['share', 'favorite']),
}.isRequired;
