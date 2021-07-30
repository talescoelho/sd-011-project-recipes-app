import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import headerBarByPathname from '../../helpers/headerBarByPathname';

function TopHeaderBar() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [pageTitle, searchButton] = headerBarByPathname(pathname);
  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
        name="profile-top-btn"
        id="profile-top-btn"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      />
      <span data-testid="page-title">
        {pageTitle}
      </span>
      { searchButton ? <button
        type="button"
        data-testid="search-top-btn"
        onClick={ () => console.log('abrir barra de busca') }
        src={ searchIcon }
      /> : null}
    </div>
  );
}

export default TopHeaderBar;
