// Solution 1
// O(n) time / O(n) Space

const reverseWordsInString = (string) => {
  const words = [];
  let startOfWord = 0;

  for (let idx = 0; idx < string.length; idx++) {
    const character = string[idx];

    if (character === ' ') {
      words.push(string.slice(startOfWord, idx));
      startOfWord = idx;
    } else if (string[startOfWord] === ' ') {
      words.push(' ');
      startOfWord = idx;
    }
  }

  words.push(string.slice(startOfWord));
  reverseList(words);
  return words.join('');
};

const reverseList = (list) => {
  let start = 0;
  let end = list.length - 1;

  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
};

// Solution 2
// O(n) time / O(n) Space

const reverseWordsInString = (string) => {
  const characters = [];
  for (const char of string) {
    characters.push(char);
  }
  reverseListRange(characters, 0, characters.length - 1);

  let startOfWord = 0;
  while (startOfWord < characters.length) {
    let endOfWord = startOfWord;
    while (endOfWord < characters.length && characters[endOfWord] !== ' ') {
      endOfWord++;
    }

    reverseListRange(characters, startOfWord, endOfWord - 1);
    startOfWord = endOfWord + 1;
  }
  return characters.join('');
};

const reverseListRange = (list, start, end) => {
  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
};
