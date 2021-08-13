import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import AreaSelect from './AreaSelect';

function Header({ mealOrDrink, buttonExists, title, searchOrSelect }) {
  const [searchClicked, setSearchClicked] = React.useState(false);
  const history = useHistory();
  const checker = () => {
    if (searchOrSelect === 'search') {
      return <SearchBar mealOrDrink={ mealOrDrink } />;
    }
    return <AreaSelect />;
  };
  return (
    <header className='container-fluid'>
          <div className='row'>

      <button
        className='btn btn-default col-4'
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/perfil') }
      >

        <img
          className='icon'
          alt="profile"
          src={ profileIcon }
        />

      </button>

      <span
      className='btn btn-default col-4 font-weight-bolder'
      data-testid="page-title">{ title }</span>

      { buttonExists && (
        <button
        className='btn btn-default col-4'
          data-testid="search-top-btn"
          type="button"
          onClick={ () => {
            setSearchClicked(!searchClicked);
            // dispatch(turnGiveIdFalse());
          } }
        >
          <img
            className='icon'
            alt="search"
            src={ searchIcon }
          />
        </button>
      ) }

      { searchClicked && checker() }
      </div>
      </header>
      );
}

Header.propTypes = {
  buttonExists: PropTypes.bool.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
  searchOrSelect: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
