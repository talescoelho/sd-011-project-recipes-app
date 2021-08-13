import React from 'react';
import {
  Row,
  Col,
  Button,
  Image,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CopyButton from '../../components/Details/CopyButton';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import * as actions from '../../actions';

function ReceitasFavoritas(props) {
  const { favorites, handleFavoriteRecipe } = props;

  const handleFavoriteBtn = (idClickado) => {
    const filteredFavoriteRecipes = favorites
      .filter((el) => el.id !== idClickado);
    handleFavoriteRecipe([...filteredFavoriteRecipes]);
  };
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <Row>
        <Col className="col-12 mt-3 d-flex justify-content-around">
          <Button
            variant="light"
            // onClick={ () => setFilter('') }
            data-testid="filter-by-all-btn"
          >
            All
          </Button>
          <Button
            variant="light"
            // onClick={ () => setFilter('bebida') }
            data-testid="filter-by-food-btn"
          >
            Food
          </Button>
          <Button
            variant="light"
            // onClick={ () => setFilter('comida') }
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </Button>
        </Col>
      </Row>
      {favorites.map((item, index) => {
        const {
          id,
          type,
          area,
          category,
          alcoholicOrNot,
          name,
        } = item;
        let formatedCategory = alcoholicOrNot;
        if (type === 'comida') {
          formatedCategory = `${area} - ${category}`;
        }
        return (
          <div key={ index } className="d-flex mx-0 mb-3 bg-light rounded shadow-lg">
            <Image
              style={ { maxWidth: '160px' } }
              // onClick={ () => handleRedirect(type, id) }
              className="ml-0 rounded-left"
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
              fluid
            />
            <div className="d-flex flex-column">
              <Col>
                <span data-testid={ `${index}-horizontal-top-text` }>
                  {formatedCategory}
                </span>
              </Col>
              <Col>
                <span data-testid={ `${index}-horizontal-name` }>{name}</span>
              </Col>
              <Col className="pb-2 justify-items-end">
                <CopyButton
                  testId={ `${index}-horizontal-share-btn` }
                  id={ id }
                  selector={ type }
                />
              </Col>
              <Col className="pb-2 justify-items-end">
                <Button
                  variant="danger"
                  type="button"
                  className="rounded-circle p-2"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  onClick={ () => handleFavoriteBtn(id) }
                  src={ blackHeartIcon }
                >
                  <img alt="Botão de favoritar receita" src={ blackHeartIcon } />
                </Button>
              </Col>
            </div>
          </div>
        );
      })}
    </div>

  );
}

const mapStateToProps = (state) => ({
  favorites: state.recipes.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  handleFavoriteRecipe: (id) => dispatch(actions.handleFavoriteRecipe(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceitasFavoritas);

// npm run cy -- --spec cypress/integration/favorite_recipes_spec.js
