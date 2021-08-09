import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/ItemIngredient.css';

export default function ItemIngredient({ item, i }) {
  const [classRisk, setClassRisk] = useState('norisk');
  const [isRisked, setIsRisked] = useState(false);

  function handleChangeCheckRisk() {
    setIsRisked(!isRisked);
  }

  function isRiskedClass() {
    return isRisked ? setClassRisk('risk') : setClassRisk('norisk');
  }

  useEffect(isRiskedClass, [isRisked]);

  return (
    <div>
      <label
        className={ classRisk }
        htmlFor={ i }
        key={ i }
      >
        <input
          type="checkbox"
          id={ i }
          onClick={ () => handleChangeCheckRisk() }
        />
        {item}
      </label>
    </div>
  );
}

ItemIngredient.propTypes = {
  item: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
