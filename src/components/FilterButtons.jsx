import React from 'react';

import { Button } from 'react-bootstrap';

export default function FilterButtons() {
  const filterButtons = () => {
    const buttonArray = [
      'All',
      'Beef',
      'Lamb',
      'Chicken',
      'Breakfast',
      'Dessert',
    ];
    return buttonArray.map((button) => (
      <Button key={ button } className="filter-button">
        {button}
      </Button>
    ));
  };

  return (
    <div className="filter-buttons">
      {filterButtons()}
    </div>

  );
}
