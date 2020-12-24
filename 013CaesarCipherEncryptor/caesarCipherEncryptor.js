// Solution 1
// O(n) time / O(n) space

const caesarCipherEncryptor = (string, key) => {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
};

const getNewLetter = (letter, key) => {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
};

// Solution 2
// O(n) time / O(n) space

const caesarCipherEncryptor = (string, key) => {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
};

const getNewLetter = (letter, key, alphabet) => {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode] % 26;
};
