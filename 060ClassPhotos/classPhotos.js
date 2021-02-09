// Solution
// O(nlog(n)) time / O(1) space
// n - number of students

const classPhotos = (redShirtHeights, blueShirtHeights) => {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const shirtColorInTopRow =
    redShirtHeights[0] < blueShirtHeights[0] ? 'BLUE' : 'RED';
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    const redShirtHeight = redShirtHeights[idx];
    const blueShirtHeight = blueShirtHeights[idx];

    if (shirtColorInTopRow === 'RED') {
      if (blueShirtHeight >= redShirtHeight) return false;
    } else if (redShirtHeight >= blueShirtHeight) return false;
  }
  return true;
};
