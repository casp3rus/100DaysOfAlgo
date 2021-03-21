// Solution 1
// O(n^(n + m)) time / O(n + m) space
// n - length of the first string
// m - length of the second string

const interweavingStrings = (one, two, three) => {
  if (three.length !== one.length + two.lenght) {
    return false;
  }

  return areInterwoven(one, two, three, 0, 0);
};

const areInterwoven = (one, two, three, i, j) => {
  const k = i + j;
  if (k === three.length) return true;

  if (i < one.length && one[i] === three[k]) {
    if (areInterwoven(one, two, three, i + 1, j)) return true;
  }

  if (j < two.length && two[j] === three[k]) {
    return areInterwoven(one, two, three, i, j + 1);
  }

  return false;
};

// Solution 2
// O(n^(n + m)) time / O(n + m) space
// n - length of the first string
// m - length of the second string

const interweavingStrings = (one, two, three) => {
  if (three.length !== one.length + two.lenght) {
    return false;
  }

  const cache = new Array(one.length + 1)
    .fill(0)
    .map((_) => new Array(two.length + 1).fill(null));
  return areInterwoven(one, two, three, 0, 0, cache);
};

const areInterwoven = (one, two, three, i, j, cache) => {
  if (cache[i][j] !== null) return cache[i][j];

  const k = i + j;
  if (k === three.length) return true;

  if (i < one.length && one[i] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache);
    if (cache[i][j]) return true;
  }

  if (j < two.length && two[j] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache);
    return cache[i][j];
  }

  cache[i][j] = false;
  return false;
};
