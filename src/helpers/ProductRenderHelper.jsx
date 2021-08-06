import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

export default function ProductRenderHelper(
  data,
  typeFilter,
  typeFilterKey,
  maxArrayProducts,
) {
  const infos = {
    id: `id${typeFilter}`,
    str: `str${typeFilter}`,
    thumb: `str${typeFilter}Thumb`,
  };

  const { pathname } = useLocation();

  if (data.location !== pathname) {
    return <p>Loading</p>;
  }
  if (
    data
      .results[typeFilterKey]
      .length === 1) {
    const product = data.results[typeFilterKey][0];
    return <Redirect to={ `${pathname}/${product[infos.id]}` } />;
  }
  return (
    <Container fluid className="card-container">
      {data
        .results[typeFilterKey]
        .slice(0, maxArrayProducts)
        .map((product, index) => (
          <Link
            to={ `${pathname}/${product[infos.id]}` }
            key={ index }
            className="link-container"
          >
            <Card
              style={ { width: '100%' } }
              data-testid={ `${index}-recipe-card` }
              border="dark"
              className="main-card"
              text="light"
            >
              <Card.Img
                variant="top"
                src={ product[infos.thumb] }
                alt="comida_principal"
                data-testid={ `${index}-card-img` }
                width="50px"
                className="main-card-img"
              />
              <Card.Title
                as="h2"
                className="main-card-title"
                data-testid={ `${index}-card-name` }
              >
                {product[infos.str]}
              </Card.Title>
            </Card>
          </Link>
        ))}
    </Container>
  );
}
