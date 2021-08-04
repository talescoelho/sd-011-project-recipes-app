import React from 'react';
import { Button } from 'react-bootstrap';
import imageHeart from '../images/whiteHeartIcon.svg';

export default function FavoriteBtn() {
  return (
    <Button
      variant="danger"
      className="btnheader"
      type="button"
      data-testid="favorite-btn"
    >
      <img data-testid="favorite-btn" src={imageHeart} alt="favorite" />
    </Button>
  );
}
