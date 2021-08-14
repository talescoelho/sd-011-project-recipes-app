import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { InProgressContext } from '../../context/InProgress';

export default function ButtonFinish() {
  const { enableFinishBtn } = useContext(InProgressContext);
  const history = useHistory();

  const handleClick = () => {
    console.log('aeww');
    return history.push('/receitas-feitas');
  };

  return (
    <button
      type="button"
      data-testid="finish-recipe-btn"
      disabled={ !enableFinishBtn }
      onClick={ handleClick }
    >
      Finalizar Receita
    </button>
  );
}
