export const copyToClipboard = (text: string) => {
  alert('ID пользователя добавлен в буфер обмена')
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}