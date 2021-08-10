import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (

    <div className="not-found-page">
      <div className="container-fluid">
        <h1 className="not-found-title">404</h1>
        <h2 className="my-1 not-found-subtitle">Not Found</h2>
        <h3 className="my-5 not-found-text">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h3>
        <div className="d-flex justify-content-center">
          <Link to="/" className="not-found-button-back">Back to Home</Link>
        </div>
      </div>
    </div>

  );
}

export default NotFound;
