import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FiltersFromCategories extends React.Component {
  renderCards(itemsToRender) {
    const filteredItems = [];
    const finalIndex = 5;
    itemsToRender.forEach((item, index) => {
      if (index < finalIndex) {
        filteredItems.push(item);
      }
    });
    return filteredItems.map((item, index) => (
      <div
        key={ index }
        style={ { margin: '10px' } }
      >
        <button
          data-testid={ `${item.strCategory}-category-filter` }
          type="button"
        >
          { item.strCategory }
        </button>
      </div>
    ));
  }

  render() {
    const { categories } = this.props;
    return (
      <div style={ { display: 'flex' } }>
        {this.renderCards(categories)}
      </div>
    );
  }
}

FiltersFromCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default connect()(FiltersFromCategories);
