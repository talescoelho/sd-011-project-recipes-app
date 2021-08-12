import React, { useContext } from 'react';
import copy from 'clipboard-copy';
import { copyLink } from '../Services/ApiDrink';
import MainContext from '../Context/MainContext';

function ItemsFoodDetails() {
  const { idFoodsAPI, show,
    setShow } = useContext(MainContext);

  const getYoutubeUrl = ({ strYoutube }) => {
    if (strYoutube) {
      const youtubeVideoId = strYoutube.split('?v=', 2)[1];
      const iframeLink = `https://www.youtube.com/embed/${youtubeVideoId}`;
      return iframeLink;
    }
  };

  return (
    <div>
      <img
        width="320"
        src={ idFoodsAPI.strMealThumb }
        alt={ `Comida selecionada: ${idFoodsAPI.strMeal}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {idFoodsAPI.strMeal}
      </h1>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => copyLink(copy, setShow, 'comidas', idFoodsAPI.idMeal) }
      >
        Compartilhar
      </button>
      <p data-testid="recipe-category">
        {idFoodsAPI.strCategory}
      </p>
      <p>{ show && 'Link copiado!'}</p>
      <ul className="scrollmenu">
        <li
          data-testid="0-recomendation-card"
        >
          <p data-testid="0-recomendation-title">
            food.strMeal
          </p>
        </li>
      </ul>
      <iframe
        data-testid="video"
        width="280"
        src={ getYoutubeUrl(idFoodsAPI) }
        title="YouTube video player"
        allowFullScreen
      />
    </div>
  );
}

export default ItemsFoodDetails;
