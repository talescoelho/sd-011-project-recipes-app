import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodCards from '../components/FoodCards';
import { fetchFoodAreaSuccess } from '../redux/actions/foodActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExploreFoodByArea extends Component {
  componentDidMount() {
    const { fetchFoodArea } = this.props;
    fetchFoodArea();
  }

  render() {
    const { foodArea } = this.props;
    return (
      <div>
        <Header />
        <select data-testid="explore-by-area-dropdown">
          { foodArea.map((item, index) => (
            <option key={ index } data-testid={ `${item.strArea}-option` }>
              { item.strArea }
            </option>
          )) }
        </select>
        <FoodCards />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodArea: state.foodReducer.foodArea,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoodArea: () => dispatch(fetchFoodAreaSuccess()),
});

ExploreFoodByArea.propTypes = {
  foodArea: PropTypes.arrayOf(PropTypes.object),
  fetchFoodArea: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFoodByArea);
