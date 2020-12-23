// Solution 1 - iteration
// O(n^2) time / O(n) space

const isPalindrome = (string) => {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
};

// Solution 2 - iteration
// O(n) time / O(n) space

const isPalindrome = (string) => {
  let reversedChars = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join('');
};

// Solution 3 - recussion
// O(n) time / O(n) space
// - check tail recursion for space improvement

const isPalindrome = (string, i = 0) => {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
};

// tail recursion

const isPalindrome = (string, i = 0) => {
    const j = string.length - 1 - i
    if (i >= j) {
        return true
    }
    if (string[i] !== string[j]) {
        return false
    }
    return isPalindrome(string, i + 1)
}

// Solution 4
// O(n) time / O(1) space

const isPalindrome = (string) => {
  let leftIdx = 0;
  rightIdx = string.length - 1;
  while (leftIdx > rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
};
