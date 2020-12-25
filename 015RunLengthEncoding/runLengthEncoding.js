// Solution 1
// O(n) time / O(n) space

const runLengthEncoding = (string) => {
  const encodedStringChars = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const previousChar = string[i - 1];

    if (currentChar != previousChar || currentRunLength === 9) {
      encodedStringChars.push(currentRunLength.toString());
      encodedStringChars.push(previousChar);
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  encodedStringChars.push(currentRunLength.toString());
  encodedStringChars.push(previousChar);

  return encodedStringChars.join('');
};
