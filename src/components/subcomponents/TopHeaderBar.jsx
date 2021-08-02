import React from 'react';
import PropTypes from 'react-dom';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import headerBarByPathname from '../../helpers/headerBarByPathname';
import '../../styles/TopHeaderBar.css';

function TopHeaderBar(props) {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [pageTitle, searchButton] = headerBarByPathname(pathname);
  const { toggleSearchBar: { searchBar, setSearchBar } } = props;

  return (
    <div className="top-header-bar">
      <button
        type="button"
        data-testid="profile-top-btn"
        name="profile-top-btn"
        id="profile-top-btn"
        onClick={ () => history.push('/perfil') }
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="Ir para perfil" />
      </button>
      <span data-testid="page-title">
        {pageTitle}
      </span>
      { searchButton
        ? (
          <button
            type="button"
            data-testid="search-top-btn"
            onClick={ () => setSearchBar(!searchBar) }
            src={ searchIcon }
          >
            <img src={ searchIcon } alt="Abrir busca" />
          </button>) : null}
    </div>
  );
}

TopHeaderBar.propTypes = {
  toggleSearchBar: PropTypes.object,
}.isRequired;

export default TopHeaderBar;
