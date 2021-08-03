import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function DetailsDrinks() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(!state);
  }, []);

  if (state) {
    return <Redirect to={ `/bebidas/${window.location.pathname.split('/')[2]}` } />;
  }

  return (
    <div>
      Xablas
    </div>
  );
}
