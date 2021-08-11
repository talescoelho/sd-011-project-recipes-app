import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../../images/shareIcon.svg';
import FavoriteIcon from '../../images/whiteHeartIcon.svg';
import UnfavoriteIcon from '../../images/blackHeartIcon.svg';

function ActionButton({ onClick, action, reverse }) {
  const getFavoriteIcon = (isUnfavorite) => {
    if (isUnfavorite) {
      return UnfavoriteIcon;
    }

    return FavoriteIcon;
  };

  const iconSrc = action === 'share' ? ShareIcon : getFavoriteIcon(reverse);

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

export default ActionButton;

ActionButton.defaultProps = {
  reverse: false,
};

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.oneOf(['share', 'favorite']).isRequired,
  reverse: PropTypes.bool,
};
