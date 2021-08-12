import React from 'react';
import profileIcon from '../../images/profileIcon.svg';
import FooterBar from '../Components/FooterBar';
import IngredientsCard from '../Components/IngredientsCard'

function ExploreFoodsIngredients() {

  const [IngredientId, setIngredientId] = React.useState();
  
  async function IngredientsFoodApi() {
    const linkIngredientCategory = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    const awaitIngredient = await fetch(linkIngredientCategory);
    const awaitIngredientToJSON = await awaitIngredient.json();
    const filterId = awaitIngredientToJSON.meals.filter((_,index) => index < 12);
    setIngredientId(filterId)
  }
  React.useEffect(() => {
    IngredientsFoodApi();
  }, []);

 
  
  

  return (
    <>
      <div>
        <h1 data-testid="page-title">Explorar Ingredientes</h1>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </div>
      <FooterBar />
      {IngredientId? IngredientId.map((u , index) => <IngredientsCard igredient = {u}/>
      ): null}
    </>
  );
}

export default ExploreFoodsIngredients;
