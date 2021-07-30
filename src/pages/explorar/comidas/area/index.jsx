import React, { Component } from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';

export default class ComidasArea extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Origem" hasSearchBar />
        Explorar Comida Area
        <Footer />
      </div>
    );
  }
}
