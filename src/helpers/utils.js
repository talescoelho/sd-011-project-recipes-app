const getXFirstElementsFromArray = (array, quantity) => array
  .filter((_, index) => index < quantity);

export default getXFirstElementsFromArray;
