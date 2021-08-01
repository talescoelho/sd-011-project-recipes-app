export default function handleClickClipboard(setMessageClipboard) {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  const time = 3000;
  setMessageClipboard('Link copiado!');
  setTimeout(() => setMessageClipboard(null), time);
}
