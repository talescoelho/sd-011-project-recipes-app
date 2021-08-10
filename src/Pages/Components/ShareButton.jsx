import React from 'react';
import { useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
// O parâmetro recebido em ShareButton, simboliza quando é hora de usar esse componente
// Na parte de receitas finalizadas ou receitas favoritadas.
// Ela recebe como parâmetro um true e um id, que são originado de receitas-feitas ou recetas-favoritas.

function ShareButton() {
  const { id } = useParams();
  const [showCopy, setShowCopy] = React.useState(false);
  function copyToClipBoard() {
    copy(`http://localhost:3000/${window.location.pathname.includes('bebidas')
      ? 'bebidas' : 'comidas'}/${id}`);
    setShowCopy(true);
  }
  return (
    <>
      <button type="button" data-testid="share-btn" onClick={ () => copyToClipBoard() }>
        <img
          src={ shareIcon }
          alt="Botão compartilhar"
        />
      </button>
      { showCopy && <p>Link copiado!</p> }
    </>
  );
}

export default ShareButton;
