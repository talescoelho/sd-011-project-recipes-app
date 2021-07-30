import React, { Component } from 'react';
import Header from '../../components/Header';

export default class Comidas extends Component {
  render() {
    return (
      <div>
        <Header title="Comidas" hasSearchBar />
        Main Comidas
      </div>
    );
  }
}
