import React from 'react';
import { Link } from 'react-router-dom';

function FoodCarrossel({ recomendation }) {
  function img0() {
    return (
      <div className="img-div">
        <Link to={ `/comidas/${recomendation[0].idMeal}` }>
          <img alt="logo" src={ recomendation[0].strMealThumb } width="100px" />
        </Link>
      </div>
    );
  }

  function img1() {
    return (
      <div className="img-div">
        <Link to={ `/comidas/${recomendation[1].idMeal}` }>
          <img alt="logo" src={ recomendation[1].strMealThumb } width="100px" />
        </Link>
      </div>
    );
  }
  function renderMealCarrossel() {
    return (
      <div className="container-fluid">
        <div id="mainSlider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#mainSlider" data-slide-to="0" className="active" />
            <li data-target="#mainSlider" data-slide-to="1" />
            <li data-target="#mainSlider" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {img0()}

            </div>
            <div className="carousel-item">

              {img1()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    recomendation ? renderMealCarrossel() : 'loading...'
  );
}

export default FoodCarrossel;
