import React, { Component } from 'react';
import FooterMenu from '../Components/FooterMenu';
import HeaderWithoutSearch from '../Components/HeaderWithoutSearch';
import ButtonsExplorer from '../Components/ButtonsExplorer';

export default class ExploreFood extends Component {
  render() {
    return (
      <div>
        <HeaderWithoutSearch title="Explorar Comidas" />
        <ButtonsExplorer type="comidas" />
        <FooterMenu />
      </div>
    );
  }
}
