import { DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import FooterBar from '../Components/FooterBar';

function ExploreFoodsArea() {
  const [areas, setAreas] = useState();
  const maxCountries = 12;
  useEffect(() => {
    async function requestAreas() {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const request = await fetch(URL);
      const response = await request.json();
      setAreas(response.meals.filter((_, index) => index < maxCountries));
    }
    requestAreas();
  }, []);
  return (
    <>
      <div>
        {areas && console.log(areas)}
        <h1 data-testid="page-title">Explorar Origem</h1>
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="Botão que direciona para a tela de perfil"
        />
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </div>
      <DropdownButton data-testid="explore-by-area-dropdown" id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item data-testid={ `${'area'}-option` }>Action</Dropdown.Item>
      </DropdownButton>
      <FooterBar />
    </>
  );
}

export default ExploreFoodsArea;
