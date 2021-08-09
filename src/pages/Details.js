import React from 'react';
import PropTypes from 'prop-types';

import { searchById } from '../services/RequestFood';

function Details({ id }) {
  const { state } = RequestHook();

  async function getDetailsById(text) {
    const items = await searchById(id);
    setInitialState(items);
  }

  useEffect(() => {
    getDetailsById();
  }, []);

  return (
    <div>
      {/* state.map(()) */ }
      Image
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
