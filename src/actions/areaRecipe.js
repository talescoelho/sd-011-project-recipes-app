export const REQUEST_AREAS = 'REQUEST_AREAS';
export const REQUEST_AREAS_SUCESS = 'REQUEST_AREA_SUCESS';
export const REQUEST_AREAS_FILTER = 'REQUEST_AREAS_FILTER';
export const REQUEST_AREAS_SUCESS_FILTER = 'REQUEST_AREAS_SUCESS_FILTER';

export const requestAreas = () => ({ type: REQUEST_AREAS });

export const requestAreaSucess = (payload) => ({
  type: REQUEST_AREAS_SUCESS,
  payload,
});

export const requestAreasFilter = () => ({ type: REQUEST_AREAS_FILTER });

export const requestAreaSucessFilter = (payload) => ({
  type: REQUEST_AREAS_SUCESS_FILTER,
  payload,
});
