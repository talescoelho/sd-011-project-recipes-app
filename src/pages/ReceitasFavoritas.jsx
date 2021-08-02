import React, { Component } from 'react';
import Header from '../components/Header';

class ReceitasFavoritas extends Component {
  render() {
    const title = 'Receitas Favoritas';
    const lupa = 'desligada';
    return (
      <div>
        <Header
          title={ title }
          lupa={ lupa }
        />
      </div>
    );
  }
}

export default ReceitasFavoritas;
