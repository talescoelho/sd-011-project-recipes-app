import React, {useState} from "react";
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import randomFetch from '../service/apiRandomRecipe';

function Explore({ localOrigin,mealOrDrink }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data,setData] = useState()
  const { dataApi } = useSelector(({randomRecipe}) =>randomRecipe );
  
  React.useEffect(() => {
    async function fetchDidMount() {
      const trar = mealOrDrink;
      dispatch(await randomFetch(trar));     
    }
    fetchDidMount();
    
  }, [dispatch,mealOrDrink]);
 
  const checker =(dataApi)=>{
   if (mealOrDrink === 'comidas'){
  return dataApi.meals && dataApi.meals.map((e)=>
     e.idMeal)}
     else{
       return dataApi.drinks && dataApi.drinks.map((e)=>
       e.idDrink)}
     }
  

 let random = checker(dataApi)
 console.log(random)
  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={() => {
          history.push(`/explorar/${mealOrDrink}/ingredientes`);
        }}
      >
        Por Ingredientes
      </button>
      {localOrigin && (
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={() => {
            history.push(`/explorar/${mealOrDrink}/area`);
          }}
        >
          Por Local de Origem
        </button>
      )}

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={() => {
          history.push(`/${mealOrDrink}/${random}`);
        }}
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

export default Explore;
