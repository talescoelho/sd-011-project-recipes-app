import React, { Component } from 'react';
import Header from '../components/Header';

export default class DoneRecipes extends Component {
  render() {
    return (
      <div>
        <Header title="Receitas Feitas" search={ false } />
        Receitas feitas
      </div>
    );
  }
}
