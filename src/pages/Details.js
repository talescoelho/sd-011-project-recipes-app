import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { searchById } from '../services/RequestFood';

function Details({ id }) {
  const { filteredFood, filteredDrink } = RequestHook();
  async function getDetailsById(text) {
    const items = await searchById(id);
    setInitialItensFood(items);
  }

  useEffect(() => {
    getDetailsById();
  }, []);

  return (
    <div>
      { id.Image }
      Nome
      ingredientes
      instruções
      video
      recomendadas
      botao inicia receita
    </div>
  );
}

Details.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Details;
