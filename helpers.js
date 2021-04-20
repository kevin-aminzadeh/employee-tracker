// Capitalize the first letter of each word in a given string
export function capitalizeString(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
