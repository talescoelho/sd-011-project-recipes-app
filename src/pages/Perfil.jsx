import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Perfil extends Component {
  render() {
    // const { email } = JSON.parse(localStorage.getItem('user'));
    return (
      <div>
        <Header title="Perfil" />
        <Footer />
      </div>
    );
  }
}
