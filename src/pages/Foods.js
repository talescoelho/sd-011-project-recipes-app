import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFoodCategory, fetchFoodList } from '../redux/actions';
import Cards from '../components/Cards';
import Categories from '../components/Categories';

class Foods extends Component {
  componentDidMount() {
    const { actionFetchFoodList, actionFetchCategories } = this.props;
    actionFetchFoodList('');
    actionFetchCategories('list');
  }

  render() {
    return (
      <div>
        <Header />
        <Categories />
        <Cards />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchFoodList: state.foodReducers.foodCardsList,
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchFoodList: (name) => dispatch(fetchFoodList(name)),
  actionFetchCategories: (category) => dispatch(fetchFoodCategory(category)),
});

Foods.propTypes = {
  actionFetchFoodList: PropTypes.func,
  actionFetchCategories: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
