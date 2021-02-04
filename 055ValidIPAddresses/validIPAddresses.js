// Solution
// O(1) time / O(1) space

const validIPAddresses = (string) => {
  const ipAddressesFound = [];

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentAddressParts = ['', '', '', ''];

    currentAddressParts[0] = string.slice(0, i);
    if (!isValidPart(currentAddressParts[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentAddressParts[1] = string.slice(i, j);
      if (!isValidPart(currentAddressParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentAddressParts[2] = string.slice(j, k);
        currentAddressParts[3] = string.slice(k);

        if (
          isValidPart(currentAddressParts[2]) &&
          isValidPart(currentAddressParts[3])
        ) {
          ipAddressesFound.push(currentAddressParts.join('.'));
        }
      }
    }
  }
  return ipAddressesFound;
};

const isValidPart = (string) => {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;

  return string.length === stringAsInt.toString().length;
};
