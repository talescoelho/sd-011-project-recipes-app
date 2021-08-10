import React, { useEffect } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import {
  requestMealsMenu,
  requestDrinkMenu,
} from '../../redux/actions/menuReducerActions';

const RecommendationCarousel = ({ url, dispatch, menu, loading, error }) => {
  useEffect(() => {
    if (url.includes('comidas')) {
      dispatch(requestDrinkMenu());
    } else {
      dispatch(requestMealsMenu());
    }
  }, []);

  return (
    <div>
      { console.log(menu) }
    </div>
  );
};

const mapStateToProps = (state) => ({
  menu: state.menuReducer.menu,
  loading: state.menuReducer.isLoading,
  error: state.menuReducer.error,
});

RecommendationCarousel.propTypes = ({
  url: string,
  dispatch: func,
}).isRequired;

export default connect(mapStateToProps)(RecommendationCarousel);
