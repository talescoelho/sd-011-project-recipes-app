import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Comidas extends Component {
  render() {
    return (
      <div>
        <Header title="Comidas" hasSearchBar />
        Main Comidas
        <Footer />
      </div>
    );
  }
}
