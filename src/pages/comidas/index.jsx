import React, { Component } from 'react';
import Header from '../../components/Header';

export default class Comidas extends Component {
  render() {
    return (
      <div>
        <Header title="Comidas" mode="comidas" hasSearchBar />
        Main Comidas
      </div>
    );
  }
}
