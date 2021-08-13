// Para pegar a data utilizamos como base o código desse link:
// https://pt.stackoverflow.com/questions/6526/como-formatar-data-no-javascript
function getDate() {
  const data = new Date();
  const dia = data.getDate().toString();
  const diaF = (dia.length === 1) ? `0${dia}` : dia;
  const mes = (data.getMonth() + 1).toString();
  const mesF = (mes.length === 1) ? `0${mes}` : mes;
  const anoF = data.getFullYear();
  return `${diaF}/${mesF}/${anoF}`;
}

export default getDate;
