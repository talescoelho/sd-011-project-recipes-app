import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';

function Comidas({ title }) {
  const { data } = useSelector((state) => state.fetchReceitas);
  return (
    <div>
      <Header title={ title } />
      { (Object.keys(data).length > 0) && <RenderRecipes />}
      <Footer />
    </div>
  );
}

export default Comidas;

Comidas.propTypes = {
  title: PropTypes.string.isRequired,
};
