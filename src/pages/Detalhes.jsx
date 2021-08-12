import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchById } from '../services';
import DetailsRecipe from '../components/DetailsRecipe';
import Loading from '../components/Loading';
import '../styles/Detalhes.css';

function Detalhes(props) {
  const { match } = props;
  const { params: { id } } = match;
  const [loading, setLoading] = useState(true);
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    const handleFetchRequest = async () => {
      let response = [];
      if (match.path.includes('bebidas')) {
        response = await searchById(id, 'bebidas');
      }
      if (match.path.includes('comidas')) {
        response = await searchById(id, 'comidas');
      }
      setLoading(false);
      return response;
    };

    async function effectFetch() {
      const fetchRequest = await handleFetchRequest();
      setRecipeData(fetchRequest);
    }
    effectFetch();
  }, [match.path, id]);

  if (loading) return <Loading />;

  return (
    <div className="detalhes-container">
      <DetailsRecipe recipeData={ recipeData } />
    </div>
  );
}

export default Detalhes;

Detalhes.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
