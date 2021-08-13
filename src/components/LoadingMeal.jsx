import React from 'react';
import loadingMeal from '../images/loadingMeal.gif';
import '../styles/LoadingMeal.css';

export default function LoadingMeal() {
  return (
    <div className="loading-meal">
      <img src={ loadingMeal } alt="gif" />
    </div>
  );
}
