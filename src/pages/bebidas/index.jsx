import React, { Component } from 'react';
import Header from '../../components/Header';

export default class Bebidas extends Component {
  render() {
    return (
      <div>
        <Header title="Bebidas" mode="bebidas" hasSearchBar />
        Main Bebidas
      </div>
    );
  }
}
