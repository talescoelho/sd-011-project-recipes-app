import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Explore extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar" search={ false } />
        Explorar
        <Footer />
      </div>
    );
  }
}
