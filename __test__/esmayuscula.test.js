const isUpperCase = require('../utils/esmayuscula');


test('The string FRASE should return true', () => {

    expect(isUpperCase('FRASE')).toBe(true)


})

test('The string Frase should return false', () => {

    expect (isUpperCase('oracion')).toBe(false);
    
    });