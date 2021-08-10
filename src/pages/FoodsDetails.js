import React, { useEffect } from 'react';
import FetchApi from '../services/ApiFetch';

export default function FoodsDetails(props) {
  const { match: { params: {id} } } = props;

  useEffect(() => {
    async function fetchApi() {
      const results = await FetchApi('themealdb', null, null, ['details', id]);
    }
    fetchApi();
  }, []);

  return (
    <div>
    </div>
  );
}
