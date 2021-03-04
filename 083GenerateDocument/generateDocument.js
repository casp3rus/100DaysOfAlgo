// Solution 1
// O(m * (n + m)) time / O(1) space
// n - length of characters string
// m - length of the document string

const generateDocument = (characters, document) => {
  for (const character of document) {
    const documentFrequency = countCharacterFrequency(character, document);
    const charactersFrequency = countCharacterFrequency(character, characters);
    if (documentFrequency > charactersFrequency) return false;
  }
  return true;
};

const countCharacterFrequency = (character, target) => {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency++;
  }
  return frequency;
};

// Solution 2
// O(c * (n + m)) time / O(c) space
// n - length of characters string
// m - length of the document string
// c - number of unique characters in the document

const generateDocument = (characters, document) => {
  const alreadyCounted = new Set();

  for (const character of document) {
    if (character in alreadyCounted) continue;

    const documentFrequency = countCharacterFrequency(character, document);
    const charactersFrequency = countCharacterFrequency(character, characters);
    if (documentFrequency > charactersFrequency) return false;

    alreadyCounted.add(character);
  }
  return true;
};

const countCharacterFrequency = (character, target) => {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency++;
  }
  return frequency;
};

// Solution 3
// O(n + m) time / O(c) space
// n - length of characters string
// m - length of the document string
// c - number of unique characters in the characters string

const generateDocument = (characters, document) => {
  const characterCounts = {};

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;

    characterCounts[character]++;
  }

  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false;

    characterCounts[character]--;
  }
  return true;
};
