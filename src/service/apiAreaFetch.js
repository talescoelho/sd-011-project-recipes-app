import {
  requestAreas,
  requestAreaSucess,
  requestAreasFilter,
  requestAreaSucessFilter,
} from '../actions/areaRecipe';

export async function fetchArea() {
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
export async function fetchAreaFilter(area) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  return async (dispatch) => {
    try {
      dispatch(requestAreasFilter());
      const { meals } = await response.json();
      dispatch(requestAreaSucessFilter(meals));
    } catch (error) {
      console.error(error);
    }
  };
}
