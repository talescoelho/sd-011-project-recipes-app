import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import AreaSelect from './AreaSelect'

function Header({ mealOrDrink, buttonExists, title, searchOrSelect }) {
  const [searchClicked, setSearchClicked] = React.useState(false);
  const history = useHistory();
  const checker = () =>{
    if (searchOrSelect === "search"){
      return  <SearchBar mealOrDrink={ mealOrDrink } />
    }else{
      return  <AreaSelect />
    }
  }
  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/perfil') }
        src={ profileIcon }
      >
        <img
          alt="profile"
          src={ profileIcon }
        />
      </button>

      <span data-testid="page-title">{title}</span>

      {buttonExists && (
        <button
          data-testid="search-top-btn"
          type="button"
          onClick={ () => {
            setSearchClicked(!searchClicked);
            // dispatch(turnGiveIdFalse());
          } }
          src={ searchIcon }
        >
          <img
            alt="search"
            src={ searchIcon }
          />
        </button>
      )}

      {searchClicked && checker()}
    </div>
  );
}

Header.propTypes = {
  buttonExists: PropTypes.bool.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
