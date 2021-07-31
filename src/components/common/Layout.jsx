import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function Layout({ children, title }) {
  useEffect(() => {
    const defaultTitle = 'App de Receitas';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;
  }, [title]);

  return (
    <>
      <header />
      { children }
      <footer />
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title: null,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};
