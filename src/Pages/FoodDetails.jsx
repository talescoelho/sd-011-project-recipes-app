import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

class FoodDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodDetail: [],
    };
    this.fetchDetail = this.fetchDetail.bind(this);
  }

  componentDidMount() {
    this.fetchDetail();
  }

  fetchDetail() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json())
      .then((result) => this.setState({ foodDetail: result.meals }));
  }

  render() {
    const { foodDetail } = this.state;
    return (
      <div>
        {foodDetail && foodDetail.map((result, index) => (
          <div key={ index }>
            <h1 data-testid="recipe-title">
              { result.strMeal }
            </h1>
            <p data-testid="recipe-category">
              { result.strCategory }
            </p>
            <img
              data-testid="recipe-photo"
              alt="product-detail-img"
              src={ result.strMealThumb }
            />
            <button type="button" data-testid="favorite-btn">Favoritar</button>
            <button type="button" data-testid="share-btn">Compartilhar</button>
            <ReactPlayer url={ result.strYoutube } data-testid="video" />
            {/* { Object.entries(result).filter((eachIngredient) => Object.key(eachIngredient[0]))} */}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodAPIResponse: state.recipeReducer.foodRecipes,
});

FoodDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;

export default connect(mapStateToProps)(FoodDetails);
