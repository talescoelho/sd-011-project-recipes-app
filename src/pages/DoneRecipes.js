import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';

export default class DoneRecipes extends Component {
  constructor() {
    super();
    this.state = {
      doneRecipes: [],
    };
  }

  componentDidMount() {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    this.setState({ // tirar do did
      doneRecipes,
    });
  }

  render() {
    const { doneRecipes } = this.state;
    return (
      <div>
        {doneRecipes.map((item, index) => {
          if (item.type === 'comida') {
            return (
              <li key={ index }>
                <Header title="Receitas Feitas" search={false} />
                <button type="button" data-testid="filter-by-all-btn">All</button>
                <button type="button" data-testid="filter-by-food-btn">Food</button>
                <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
                <Link to={`/${item.type}/${item.id}`}>
                  <img data-testid={`${index}-horizontal-image`} src={item.image} alt="card-img" />
                </Link>
                <p data-testid={`${index}-horizontal-top-text`}>{item.category}</p>
                <p>{item.area}</p>
                <Link to={`/${item.type}/${item.id}`}>
                  <h2 data-testid="${index}-horizontal-name">{item.name}</h2>
                </Link>
                <p data-testid={`${index}-horizontal-done-date`}>{`Feita em: ${item.doneDate}`}</p>
                <p data-testid={`${index}-${item.tags}-horizontal-tag`}>{item.tags[0]}{item.tags[1]}</p>
                <ShareButton data-testid={`${index}-horizontal-share-btn`} />
              </li>
            );
          }
          else {
            return (
              <li key={ index }>
                <Header title="Receitas Feitas" search={false} />
                <button type="button" data-testid="filter-by-all-btn">All</button>
                <button type="button" data-testid="filter-by-food-btn">Food</button>
                <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
                <Link to={`/${item.type}/${item.id}`}>
                  <img data-testid={`${index}-horizontal-image`} src={item.image} alt="card-img" />
                </Link>
                <p data-testid={`${index}-horizontal-top-text`}>{item.category}</p>
                <p>{item.alcoholicOrNot}</p>
                <Link to={`/${item.type}/${item.id}`}>
                  <h2 data-testid={`${index}-horizontal-name`}></h2>
                </Link>
                <p data-testid={`${index}-horizontal-done-date`}>{`Feita em: ${item.doneDate}`}</p>
                <p data-testid={`${index}-${item.tags}-horizontal-tag`}>{item.tags[0]}{item.tags[1]}</p>
                <ShareButton data-testid={`${index}-horizontal-share-btn`} />
              </li>
            );
          }
        })}
      </div>
    );
  }
}
