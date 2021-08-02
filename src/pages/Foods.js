import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFoodList } from '../redux/actions';

class Foods extends Component {
  componentDidMount() {
    const { actionFetchFoodList } = this.props;
    actionFetchFoodList('');
  }

  render() {
    return (
      <div>
        <Header />
        Comidas
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
});

Foods.propTypes = {
  actionFetchFoodList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
