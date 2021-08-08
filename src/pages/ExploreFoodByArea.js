import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ExploreFoodByArea extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Origem" search />
        Explorar comidas por area
        <Footer />
      </div>
    );
  }
}
