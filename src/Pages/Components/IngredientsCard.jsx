import React from 'react'

export default function IngredientsCard({ingredient}) {
    const [IngredientImageId, setIngredientImageId] = React.useState();

    async function IngredientsFoodImageApi() {
        const linkIngredientImage = `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`;
        const awaitIngredient = await fetch(linkIngredientImage);
        const awaitIngredientToJSON = await awaitIngredient.json();
        setIngredientImageId(awaitIngredientToJSON)
      }
   
      React.useEffect(() => {
        IngredientsFoodImageApi();
      }, []);

      
    return (
        <div>
            <img src={IngredientImageId ? IngredientImageId : null} alt="" />
            <div>{ingredient.strIngredient}</div>

        </div>
    )
}
