import React, { useState, useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import { searchById } from '../services';
import DetailsRecipe from '../components/DetailsRecipe';
import Loading from '../components/Loading';

function Detalhes(props) {
  const { match } = props;
  const { params: { id } } = match;
  const [loading, setLoading] = useState(true);
  const [recipeData, setRecipeData] = useState([]);

  const handleFetchRequest = async () => {
    let response = [];
    if (match.path.includes('comidas')) {
      response = await searchById(id, 'comidas');
    } if (match.path.includes('bebidas')) {
      response = await searchById(id, 'bebidas');
    }
    setLoading(false);
    return response;
  };

  useEffect(() => {
    async function effectFetch() {
      const fetchRequest = await handleFetchRequest();
      setRecipeData(fetchRequest);
    }
    effectFetch();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="Detalhes-container">
      <DetailsRecipe recipeData={ recipeData } />
    </div>
  );
}

export default Detalhes;

Detalhes.propTypes = {
  match: PropTypes.objectOf(object.PropTypes).isRequired,
};
