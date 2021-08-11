import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
// initial commit

const CompletedRecipes = () => (
  <>
    <Header
      page="Receitas Feitas"
      showSearchBtn={ false }
    />
    <div>Receitas Finalizadas</div>
  </>
);

export default CompletedRecipes;
