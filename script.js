function firstChar(str) {
  // Loop through each character
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i];
    }
  }
  // If only spaces or empty string
  return '';
}