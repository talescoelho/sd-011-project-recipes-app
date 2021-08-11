import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Spinner,
} from 'react-bootstrap';
import Header from '../../components/Header';
import CopyButton from '../../components/Details/CopyButton';
import DoneRecipesCard from '../../components/DoneRecipesCard';

export default function ReceitasFeitas() {
  const [isLoading, setIsLoading] = useState(false);

  const loading = () => (
    <Container className="d-flex m-auto flex-column justify-content-center">
      <Spinner className="m-auto" animation="border" role="status" />
      <h2 className="m-auto">Loading</h2>
    </Container>
  );

  const pageContent = () => {
    return (
      <Container fluid="md" style={ { backgroundColor: '#0fa36b' } } as="main">
        <Row>
          <Col className="w-100 px-0">
            <Header title="Receitas Feitas" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3 d-flex justify-content-around">
            <Button
              variant="light"
              data-testid="filter-by-all-btn"
            >
              All
            </Button>
            <Button
              variant="light"
              data-testid="filter-by-food-btn"
            >
              Food
            </Button>
            <Button
              variant="light"
              data-testid="filter-by-drink-btn"
            >
              Drinks
            </Button>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-center">
          <Col className="col-12">
            <DoneRecipesCard />
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    isLoading ? loading() : pageContent()
  );
}
