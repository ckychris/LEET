// 90th percentile
const subtractionsNumerals = new Map([
  ["IV", 4],
  ["IX", 9],
  ["XL", 40],
  ["XC", 90],
  ["CD", 500],
  ["CM", 900],
]);
const additionsNumerals = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

/**
 * @param {string} romanNumber
 * @return {number}
 */
const romanToInt = (romanNumber) => {
  let result = 0;

  // Six instances of subtractions should be detected ahead with ordering
  subtractionsNumerals.forEach((integerValue, romanValue) => {
    const previousLength = romanNumber.length;
    romanNumber = romanNumber.replace(romanValue, "");
    if (romanNumber.length !== previousLength) result += integerValue;
  });

  for (const romanCharacter of romanNumber) {
    result += additionsNumerals.get(romanCharacter) || 0;
  }

  return result;
};
