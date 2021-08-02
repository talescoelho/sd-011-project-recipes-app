import React, { Component } from 'react';
import Header from '../components/Header';

class ReceitasFavoritas extends Component {
  render() {
    const title = 'Receitas Favoritas';
    const search = 'off';
    return (
      <main>
        <Header
          title={ title }
          search={ search }
        />
      </main>
    );
  }
}

export default ReceitasFavoritas;
