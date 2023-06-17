export const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export function wordToColorCode(word) {
  let hash = 0;
  for (let i = 0; i < word.length; i++) {
    hash = word.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = Math.floor(
    Math.abs((Math.sin(hash) * 16777215) % 1) * 16777215
  ).toString(16);
  return "#" + "0".repeat(6 - color.length) + color;
}
