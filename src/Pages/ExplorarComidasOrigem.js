import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RenderOrigin from '../components/RenderOrigin';

function ExplorarComidasOrigem({ title }) {
  return (
    <div>
      <Header title={ title } />
      <RenderOrigin />
      <Footer />
    </div>
  );

export default ExplorarComidasOrigem;
