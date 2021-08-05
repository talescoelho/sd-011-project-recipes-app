import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function ButtonToProgress(props) {
  const { mealDetail } = props;
  const drinkDetail = 'a';
  let type = 'comidas';
  if (drinkDetail) type = 'bebidas';

  const [toRedirect, setToRedirect] = useState(false);

  const handleClick = () => setToRedirect(true);

  return (
    <div>
      <button type="button" onClick={ handleClick }>
        Iniciar Receita
      </button>
      {toRedirect && (
        <Redirect
          to={ {
            pathname: `/${type}/${window.location.pathname.split('/')[2]}/in-progress`,
            state: mealDetail || drinkDetail,
          } }
        />
      )}
    </div>
  );
}

export default ButtonToProgress;

ButtonToProgress.defaultProps = {
  mealDetail: undefined,
};

ButtonToProgress.propTypes = {
  mealDetail: PropTypes.shape({
    mealId: PropTypes.string,
  }),
};
