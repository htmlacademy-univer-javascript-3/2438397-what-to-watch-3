export function getDateString(dateString: string): string {
  const date = new Date(Date.parse(dateString));
  return `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getDate()}, ${date.getFullYear()}`;
}
