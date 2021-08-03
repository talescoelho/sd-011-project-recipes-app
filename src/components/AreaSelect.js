import React from 'react';
// import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import fetchArea from '../service/apiAreaFetch';

function AreaSelect() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { dataApi } = useSelector(({ areaReducer }) => areaReducer);

  React.useEffect(() => {
    async function fetchDidMount() {
      dispatch(await fetchArea());
    }
    fetchDidMount();
  }, [dispatch]);
  console.log(dataApi);
  return (
    <div>oi</div>
  );
}

export default AreaSelect;
