// 95th percentile
const subtractionsNumerals = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };

const additionsNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

/**
 * @param {string} romanNumber
 * @return {number}
 */
const romanToInt = (romanNumber) => {
  let result = 0;

  // Six instances of subtractions should be detected ahead with ordering
  ["IV", "IX", "XL", "XC", "CD", "CM"].forEach((romanValue) => {
    const previousLength = romanNumber.length;
    romanNumber = romanNumber.replace(romanValue, "");
    if (romanNumber.length !== previousLength)
      result += subtractionsNumerals[romanValue];
    if (romanNumber.length === 0) return;
  });

  for (const romanCharacter of romanNumber) {
    result += additionsNumerals[romanCharacter] || 0;
  }

  return result;
};
