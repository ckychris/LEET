// 85th percentile
const subtractionsNumerals = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };

const additionsNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

/**
 * @param {string} romanNumber
 * @return {number}
 */
const romanToInt = (romanNumber) => {
  let result = 0;

  for (i = 0; i < romanNumber.length - 1; i++) {
    const currentLetter = romanNumber[i];
    const nextLetter = romanNumber[i + 1];
    const twoLetters = `${currentLetter}${nextLetter}`;

    if (subtractionsNumerals[twoLetters]) {
      result += subtractionsNumerals[twoLetters];
      i++;
      if (i === romanNumber.length - 1) return result;
    } else {
      result += additionsNumerals[currentLetter];
    }
  }

  result += additionsNumerals[romanNumber[romanNumber.length - 1]];

  return result;
};
