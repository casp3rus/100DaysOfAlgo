// Solution 1
// O(n^2) time / O(1) space

const firstNonRepeatingCharacter = (string) => {
  for (let idx = 0; idx < string.length; idx++) {
    let foundDuplicate = false;
    for (let idx2 = 0; idx2 < string.length; idx2++) {
      if (string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true;
    }

    if (!foundDuplicate) return idx;
  }
  return -1;
};

// Solution 2
// O(n) time / O(1) space

const firstNonRepeatingCharacter = (string) => {
  const characterFrequencies = {};

  for (const character of string) {
    if (!(character in characterFrequencies)) {
      characterFrequencies[character] = 0;
    }
    characterFrequencies[character]++;
  }

  for (let idx = 0; idx < string.length; idx++) {
    const character = string[idx];
    if (characterFrequencies[character] === 1) return idx;
  }
  return -1;
};
