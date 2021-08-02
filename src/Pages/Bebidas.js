import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';

function Bebidas({ title }) {
  const { data } = useSelector((state) => state.fetchReceitas);
  return (
    <div>
      <Header title={ title } />
      { (Object.keys(data).length > 0) && <RenderRecipes />}
    </div>
  );
}

export default Bebidas;

Bebidas.propTypes = {
  title: PropTypes.string.isRequired,
};
