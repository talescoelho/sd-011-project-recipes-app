import React, { Component } from 'react';
import Header from '../components/Header';

export default class FavoriteRecipes extends Component {
  render() {
    return (
      <div>
        <Header title="Receitas Favoritas" search={ false } />
        Receitas Favoritas
      </div>
    );
  }
}
