import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RenderFoodAreaOptions from '../components/RenderFoodAreaOptions';

function ExplorarComidasOrigem({ title }) {
  // const { foodAreaList } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes('foodAreaList'));
  }, [dispatch]);

  return (
    <div>
      <Header title={ title } />
      <RenderFoodAreaOptions />
      <Footer />
    </div>
  );

}

export default ExplorarComidasOrigem;

ExplorarComidasOrigem.propTypes = {
  title: PropTypes.string.isRequired,
};
