const FetchApi = async (trigger, radioOption, inputValue) => {
  let url = '';
  if (radioOption === 'ingrediente') {
    url = `filter.php?i=${inputValue}`;
    console.log(inputValue);
  }
  if (radioOption === 'nome') {
    url = `search.php?s=${inputValue}`;
    console.log(inputValue);
  }
  if (radioOption === 'primeiraLetra' && inputValue.length > 1) {
    // eslint-disable-next-line no-alert
    alert('Sua busca deve conter somente 1 (um) caracter');
  }
  if (radioOption === 'primeiraLetra') {
    url = `search.php?f=${inputValue}`;
    console.log(inputValue);
  }
  const feth = await fetch(`https://www.${trigger}.com/api/json/v1/1/${url}`);
  const feth2 = feth.json();
  return feth2;
};

export default FetchApi;
