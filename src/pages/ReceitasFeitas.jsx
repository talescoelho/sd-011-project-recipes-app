import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ReceitasFeitas extends Component {
  render() {
    const title = 'Receitas Feitas';
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

export default ReceitasFeitas;
