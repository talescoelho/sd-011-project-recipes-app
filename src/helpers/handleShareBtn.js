export default function handleShareBtn() {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  window.alert('Link copiado!');
}
