// Solution 1
// O(bns) time / O(n) space
// b length of the bigString
// n length of the smallStrings array
// s length of the largest small string

const multiStringSearch = (bigString, smallStrings) => {
  return smallStrings.map((smallString) =>
    isInBigString(bigString, smallString)
  );
};

const isInBigString = (bigString, smallString) => {
  for (let i = 0; i < bigString.length; i++) {
    if (i + smallString.length > bigString.length) break;
    if (isInBigStringHelper(bigString, smallString, i)) return true;
  }
  return false;
};

const isInBigStringHelper = (bigString, smallString, startIdx) => {
  let leftBigIdx = startIdx;
  let rightBigIdx = startIdx + smallString.length - 1;
  let leftSmallIdx = 0;
  let rightSmallIdx = smallString.length - 1;

  while (leftBigIdx <= rightBigIdx) {
    if (
      bigString[leftBigIdx] != smallString[leftSmallIdx] ||
      bigString[rightBigIdx] != smallString[rightSmallIdx]
    ) {
      return false;
    }
    leftBigIdx++;
    rightBigIdx--;
    leftSmallIdx++;
    rightSmallIdx--;
  }
  return true;
};

// Solution 2
// O(b^2 + ns) time / O(b^2 + n) space
// b length of the bigString
// n length of the smallStrings array
// s length of the largest small string

const multiStringSearch = (bigString, smallStrings) => {
  const modifiedSuffixTrie = new ModifiedSuffixTrie(bigString);
  return smallStrings.map((string) => modifiedSuffixTrie.contains(string));
};

class ModifiedSuffixTrie {
  constructor(string) {
    this.root = {};
    this.populateModifiedSuffixTrieFrom(string);
  }

  populateModifiedSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
  }

  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return true;
  }
}

// Solution 3
// O(ns + bs) time / O(ns) space
// b length of the bigString
// n length of the smallStrings array
// s length of the largest small string

const multiStringSearch = (bigString, smallStrings) => {
  const trie = new Trie();
  for (const string of smallStrings) {
    trie.insert(string);
  }
  const containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedStrings);
  }
  return smallStrings.map((string) => string in containedStrings);
};

const findSmallStringsIn = (string, startIdx, trie, containedStrings) => {
  let currentNode = trie.root;
  for (let i = startIdx; i < string.length; i++) {
    const currentChar = string[i];
    if (!(currentChar in currentNode)) break;
    currentNode = currentNode[currentChar];
    if (trie.endSymbol in currentNode)
      containedStrings[currentNode[trie.endSymbol]] = true;
  }
};

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }

  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in current)) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current[this.endSymbol] = string;
  }
}
