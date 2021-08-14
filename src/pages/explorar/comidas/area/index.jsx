import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import * as actions from '../../../../actions';

const TWELVE = 12;
class ComidasArea extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeArea = this.handleOnChangeArea.bind(this);
  }

  componentDidMount() {
    const { filterListArea, generalRecipesFood } = this.props;
    filterListArea();
    generalRecipesFood();
  }

  handleOnChangeArea(event) {
    const { filterRecipeByArea, generalRecipesFood } = this.props;
    if (event.target.value !== 'All') {
      filterRecipeByArea(event.target.value);
    } else {
      generalRecipesFood();
    }
  }

  renderSelect() {
    const { allAreas } = this.props;

    return (
      <div>
        <select
          data-testid="explore-by-area-dropdown"
          onChange={ this.handleOnChangeArea }
        >
          <option data-testid="All-option" value="All">All</option>
          {allAreas.map(({ strArea: area }, index) => (
            <option
              data-testid={ `${area}-option` }
              key={ index }
              value={ area }
            >
              { area }
            </option>
          ))}
        </select>
      </div>
    );
  }

  renderAreaFoods() {
    const { allRecipes } = this.props;
    const allRecipesSlice = allRecipes.slice(0, TWELVE);
    return (
      allRecipesSlice.map((item, index) => (
        <Link to={ `/comidas/${item.idMeal}` } key={ index }>
          <div
            className="card-item"
            data-testid={ `${index}-recipe-card` }
          >
            <img
              className="img-card"
              alt={ item.strMeal }
              src={ item.strMealThumb }
              data-testid={ `${index}-card-img` }
            />
            <div>
              <span
                data-testid={ `${index}-card-name` }
              >
                {item.strMeal}
              </span>
            </div>
          </div>
        </Link>
      ))
    );
  }

  render() {
    return (
      <>
        <Header title="Explorar Origem" mode="comidas" hasSearchBar />
        <div className="container-main">
          <div className="area-dropdown">
            {this.renderSelect()}
          </div>
          <div className="card-list">
            {this.renderAreaFoods()}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  allAreas: state.recipes.allAreas,
  allRecipes: state.recipes.allRecipes,
  isAreaList: state.recipes.isAreaList,
  isAreaFilter: state.recipes.isAreaFilter,
});

const mapDispatchToProps = (dispatch) => ({
  filterListArea: () => dispatch(actions.filterListArea()),
  generalRecipesFood: () => dispatch(actions.generalRecipesFood()),
  filterRecipeByArea: (filter) => dispatch(actions.filterRecipeByArea(filter)),
});

ComidasArea.propTypes = {
  allAreas: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterListArea: PropTypes.func.isRequired,
  filterRecipeByArea: PropTypes.func.isRequired,
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  generalRecipesFood: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComidasArea);
