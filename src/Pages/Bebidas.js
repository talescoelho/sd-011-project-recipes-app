import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';

function Bebidas({ title }) {
  const { data } = useSelector((state) => state.fetchReceitas);
  return (
    <div>
      <Header title={ title } />
      { (Object.keys(data).length > 0) && <RenderRecipes />}
      <Footer />
    </div>
  );
}

export default Bebidas;

Bebidas.propTypes = {
  title: PropTypes.string.isRequired,
};
