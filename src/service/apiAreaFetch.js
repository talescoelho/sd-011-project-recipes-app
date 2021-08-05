import { requestAreas, requestAreaSucess } from '../actions/areaRecipe';

export default async function fetchArea() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  return async (dispatch) => {
    try {
      dispatch(requestAreas());
      const data = await response.json();
      dispatch(requestAreaSucess(data));
    } catch (error) {
      console.error(error);
    }
  };
}
