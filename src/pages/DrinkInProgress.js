import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DrinkInProgressCard from '../components/DrinkInProgressCard';
import { fetchDrinkID } from '../redux/actions/drinkActions';

class DrinkInProgress extends Component {
  componentDidMount() {
    const { match: { params: { id } }, fetchDrinkByID } = this.props;
    fetchDrinkByID(id);
  }

  render() {
    return (
      <div>
        <DrinkInProgressCard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDrinkByID: (id) => dispatch(fetchDrinkID(id)),
});

DrinkInProgress.propTypes = {
  fetchDrinkByID: PropTypes.func,
  match: PropTypes.object,
}.isRequire;

export default connect(null, mapDispatchToProps)(DrinkInProgress);
