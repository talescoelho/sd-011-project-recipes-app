import React, { Component } from 'react';
import { Header } from '../components';
import DrinkFavoriteButton from '../components/DrinkFavoriteButton';
import DrinkShareButton from '../components/DrinkShareButton';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

export default class FavoriteRecipes extends Component {
  constructor(){
    super();
    this.state = {
      favoriteRecipes: [],
    };
  }

  componentDidMount() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    this.setState({
      favoriteRecipes,
    });
  }

  FilterList(filter) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')).filter((item) => item.type.includes(filter));
    this.setState({
      favoriteRecipes,
    });
  }

  render() {
    const { favoriteRecipes } = this.state;
    return (
      <div>
        <Header title="Receitas Favoritas" search={ false } />
        <button type="button" data-testid="filter-by-all-btn" onClick={() => this.FilterList('')}>All</button>
        <button type="button" data-testid="filter-by-food-btn" onClick={() => this.FilterList('comida')}>Food</button>
        <button type="button" data-testid="filter-by-drink-btn"onClick={() => this.FilterList('bebida')}>Drink</button>
        {favoriteRecipes.map((item, index)=> {
          if(item.type === 'comida')
          return (
            <li key={item.id}>
            <img
              src={item.image}
              alt="foto da receita"
              data-testid={`${index}-horizontal-image`}
              height='200px'
              width='200px'
            />
            <p data-testid={`${index}-horizontal-top-text`}>{ `${item.area} - ${item.category}` }</p>
            <p data-testid={`${index}-horizontal-name`}>{ item.name }</p>
            <ShareButton test={`${index}-horizontal-share-btn`} id={item.id} />
            <FavoriteButton test={`${index}-horizontal-favorite-btn`} id={item.id} />
          </li>
          );

          return (
            <li key={item.id}>
            <img
              src={item.image}
              alt="foto da receita"
              data-testid={`${index}-horizontal-image`}
              height='200px'
              width='200px'
            />
            <p data-testid={`${index}-horizontal-top-text`}>{ item.alcoholicOrNot }</p>
            <p data-testid={`${index}-horizontal-name`}>{ item.name }</p>
            <DrinkShareButton test={`${index}-horizontal-share-btn`} id={item.id} />
            <DrinkFavoriteButton test={`${index}-horizontal-favorite-btn`} id={item.id} />
          </li>
          )
        })}
      </div>
    );
  }
}
