export const REQUEST_AREAS = 'REQUEST_AREAS';
export const REQUEST_AREAS_SUCESS = 'REQUEST_AREA_SUCESS';

export const requestAreas = () => ({ type: REQUEST_AREAS });

export const requestAreaSucess = (payload) => ({
  type: REQUEST_AREAS_SUCESS,
  payload });
