import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../../../images/shareIcon.svg';
import FavoriteIcon from '../../../images/whiteHeartIcon.svg';
import UnfavoriteIcon from '../../../images/blackHeartIcon.svg';

function BaseActionButton({ onClick, action, reverse, index }) {
  const getFavoriteIcon = (isUnfavorite) => {
    if (isUnfavorite) {
      return UnfavoriteIcon;
    }

    return FavoriteIcon;
  };

  const iconSrc = action === 'share' ? ShareIcon : getFavoriteIcon(reverse);
  // data-testid={ `${index}-horizontal-favorite-btn` }
  return (
    <button
      data-testid={ `${action}-btn` }
      type="button"
      title={ `${action} the recipe` }
      onClick={ onClick }
      src={ iconSrc }
    >
      <img src={ iconSrc } alt={ `icon representing ${action}` } />
    </button>
  );
}

export default BaseActionButton;

BaseActionButton.defaultProps = {
  reverse: false,
};

BaseActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.oneOf(['share', 'favorite']).isRequired,
  reverse: PropTypes.bool,
  index: PropTypes.number.isRequired,
};
