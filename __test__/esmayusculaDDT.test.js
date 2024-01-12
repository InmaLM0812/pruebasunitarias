const isUpperCase = require('../utils/esmayuscula');

describe('calculator', () => {
    test.each`
      firstValue  | expectedResult    
      ${"H"}        | ${true}
      ${"h"}       | ${false}
      ${"Hello"}       | ${true}
      ${"hello"}       | ${false}
    `('$firstValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });