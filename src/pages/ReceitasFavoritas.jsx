import React, { Component } from 'react';
import Header from '../components/Header';

class ReceitasFavoritas extends Component {
  render() {
    const title = 'Receitas Favoritas';
    const lupa = 'desligado';
    return (
      <main>
        <Header
          title={ title }
          lupa={ lupa }
        />
      </main>
    );
  }
}

export default ReceitasFavoritas;
