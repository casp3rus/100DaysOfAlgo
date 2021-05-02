// Solution
// O(n) time / O(n) space

const shortenPath = (path) => {
  const stack = path[0] === '/' ? [''] : [];
  const tokens = path.split('/').filter(isImportantToken);

  for (const token of tokens) {
    if (token === '..') {
      if (stack.length === 0 || stack[stack.length - 1] === '..') {
        stack.push(token);
      } else if (stack[stack.length - 1] !== '') {
        stack.pop();
      }
    } else {
      stack.push(token);
    }
  }
  if (stack.length === 1 && stack[0] === '') return '/';
  return stack.join('/');
};

const isImportantToken = (token) => {
  return token.length > 0 && token !== '.';
};
