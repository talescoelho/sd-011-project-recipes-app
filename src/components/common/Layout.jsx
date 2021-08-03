import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import Footer from './Layout/Footer';
import { useTheme } from '../../hooks';
import SearchForm from '../Home/SearchForm';

function Layout({ children, title, search, noHeader }) {
  const { colors } = useTheme();

  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const defaultTitle = 'App de Receitas';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;
  }, [title]);

  const styles = {
    header: {
      backgroundColor: colors.background,
      color: colors.primaryColor,
    },
  };
  const handleShowSeachInput = () => (
    showInput ? setShowInput(false) : setShowInput(true)
  );

  const handleTypeRequisition = () => (title === 'Comidas' ? 'meals' : 'drinks');

  return (
    <>
      { !noHeader && (
        <header style={ styles.header }>
          <Link to="/perfil">
            <img
              data-testid="profile-top-btn"
              alt="Ver meu perfil"
              src={ ProfileIcon }
            />
          </Link>
          <h3 data-testid="page-title">{ title }</h3>
          { search
            && (
              <button
                type="button"
                onClick={ () => handleShowSeachInput() }
              >
                <img
                  data-testid="search-top-btn"
                  alt="Buscar receitas"
                  src={ SearchIcon }
                />
              </button>
            )}
          {showInput && <SearchForm type={ handleTypeRequisition() } />}

        </header>)}
      { children }
      <Footer />
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title: null,
  search: false,
  noHeader: false,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  search: PropTypes.bool,
  noHeader: PropTypes.bool,
};
