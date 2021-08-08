import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header title="Perfil" search={ false } />
        Perfil
        <Footer />
      </div>
    );
  }
}
