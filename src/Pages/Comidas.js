import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import { getRecipes } from '../redux/slices/fetchReceitas';
import Footer from '../components/Footer';

function Comidas({ title }) {
  const { foods } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!foods || Object.keys(foods).length === 0) {
      const URL = title === 'Comidas'
        ? 'foods'
        : 'drinks';
      dispatch(getRecipes(URL));
    }
  }, [foods]);

  return (
    <div>
      <Header title={ title } />
      {Object.keys(foods).length > 0 && <RenderRecipes />}
      <Footer />
    </div>
  );
}

export default Comidas;

Comidas.propTypes = {
  title: PropTypes.string.isRequired,
};
