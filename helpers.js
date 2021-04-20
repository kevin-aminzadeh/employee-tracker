// Capitalize the first letter of each word in a given string
exports.capitalizeString(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
