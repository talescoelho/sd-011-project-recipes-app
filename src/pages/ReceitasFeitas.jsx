import React, { Component } from 'react';
import Header from '../components/Header';

class ReceitasFeitas extends Component {
  render() {
    const title = 'Receitas Feitas';
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

export default ReceitasFeitas;
