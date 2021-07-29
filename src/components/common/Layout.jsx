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
