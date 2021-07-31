import React, { Component } from 'react';
import FooterMenu from '../Components/FooterMenu';
import HeaderWithoutSearch from '../Components/HeaderWithoutSearch';

export default class ExploreDrinkIngredients extends Component {
  render() {
    return (
      <div>
        <HeaderWithoutSearch title="Explorar Ingredientes" />
        <FooterMenu />
      </div>
    );
  }
}
