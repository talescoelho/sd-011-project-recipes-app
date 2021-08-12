export default function handleLocationIn(location) {
  const { pathname } = location;
  let type = '';
  if (pathname.includes('comidas')) type = 'meals';
  if (pathname.includes('bebidas')) type = 'cocktails';
  return type;
}
