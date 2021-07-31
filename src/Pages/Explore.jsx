import React, { Component } from 'react';
import FooterMenu from '../Components/FooterMenu';
import HeaderWithoutSearch from '../Components/HeaderWithoutSearch';

export default class Explore extends Component {
  render() {
    return (
      <div>
        <HeaderWithoutSearch title="Explorar" />
        <FooterMenu />
      </div>
    );
  }
}
