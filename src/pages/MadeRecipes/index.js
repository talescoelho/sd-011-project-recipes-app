import React from 'react';
import Header from '../../components/Header';

const MadeRecipes = () => {
  document.title = 'Receitas Feitas';
  return (
    <div>
      <Header />
      Sou página de receitas feitas.
    </div>
  );
};

export default MadeRecipes;

// O imagem do card de receita deve ter o atributo data-testid="${index}-horizontal-image";
// O texto da categoria da receita deve ter o atributo data-testid="${index}-horizontal-top-text";
// O texto do nome da receita deve ter o atributo data-testid="${index}-horizontal-name";
// O texto da data que a receita foi feita deve ter o atributo data-testid="${index}-horizontal-done-date";
// O elemento de compartilhar a receita deve ter o atributo data-testid="${index}-horizontal-share-btn";
// As tags da receita devem possuir o atributo data-testid=${index}-${tagName}-horizontal-tag;
