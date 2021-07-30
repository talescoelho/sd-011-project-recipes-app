import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../../images/searchIcon.svg';

export default function ExploreBtn() {
  return (
    <div>
      <Link to="explorar">
        <img src={ searchIcon } alt="Símbolo buscar" data-testeid="explore-bottom-btn" />
      </Link>
    </div>
  );
}
