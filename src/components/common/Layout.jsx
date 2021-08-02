import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import { useTheme } from '../../hooks';

function Layout({ children, title, search, noHeader }) {
  const { colors } = useTheme();
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

  return (
    <>
      { !noHeader && (
        <header style={ styles.header }>
          <Link to="/perfil">
            <img data-testid="profile-top-btn" alt="Profile Icon" src={ ProfileIcon } />
          </Link>
          <h3 data-testid="page-title">{ title }</h3>
          { search
            ? <img data-testid="search-top-btn" alt="Search Icon" src={ SearchIcon } />
            : null}
        </header>)}
      { children }
      <footer />
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
