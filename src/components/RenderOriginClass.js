import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RenderOriginClass extends Component {
  constructor() {
    super();
    this.state = {
      selectedOptions: null,
      area: 'All',
      data: null,
    };
    this.getOptions = this.getOptions.bind(this);
    this.getFoods = this.getFoods.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
  }

  componentDidMount() {
    this.getOptions();
    this.getFoods();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data !== nextState.data
  }


  handleAreaChange({ target: { value } }) {
    this.setState({ area: value }, () => {
      const { area, data } = this.state;
      const newURL = `https:www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
      fetch(newURL)
        .then((res) => res.json())
        .then((foods) => this.setState({ data: foods }, () => {
          console.log(this.state);
        }));
    });
  }

  getOptions() {
    const optionsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    fetch(optionsURL)
      .then((res) => res.json())
      .then((options) => this.setState({ selectedOptions: options }));
  }

  getFoods() {
    const allURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    fetch(allURL)
      .then((res) => res.json())
      .then((foods) => this.setState({ data: foods }));
  }

  render() {
    const { selectedOptions, data, area } = this.state;
    console.log(area)
    const limitCards = 12;
    if (selectedOptions === null || data === null) return <p>Loading...</p>;
    return (
      <div>
        <label htmlFor="recipe-origin">
          <select
            id="recipe-origin"
            data-testid="explore-by-area-dropdown"
            onChange={ this.handleAreaChange }
          >
            <option data-testid="All-option" value="All">All</option>
            {selectedOptions.meals.map(({ strArea }, index) => (
              <option
                data-testid={ `${strArea}-option` }
                value={ strArea }
                key={ index }
              >
                {strArea}
              </option>
            ))}
          </select>
        </label>
        {data.meals.slice(0, limitCards)
          .map(({ strMeal, strMealThumb, idMeal }, index) => (
            <Link key={ index } to={ `/comidas/${idMeal}` }>
              <div data-testid={ `${index}-recipe-card` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ strMealThumb }
                  alt={ strMeal }
                  width="50px"
                />
                <p data-testid={ `${index}-card-name` }>{strMeal}</p>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}
