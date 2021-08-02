import React, { Component } from 'react';
import Header from '../components/Header';

class ReceitasFeitas extends Component {
  render() {
    const title = 'Receitas Feitas';
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

export default ReceitasFeitas;
