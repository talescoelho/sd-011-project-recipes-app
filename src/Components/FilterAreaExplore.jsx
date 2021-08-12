import React, { useEffect } from 'react';

export default function FilterAreaExplore() {
  const [areas, setAreas] = useState([]);
  console.log(areas);

  useEffect(() => {
    const fetchArea = async () => {
      const requisition = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const { meals } = await requisition.json();
      setAreas(meals);
    };

    fetchArea();
  }, []);

  return (
    <div>
      <select>Canada</select>
    </div>
  );
}
