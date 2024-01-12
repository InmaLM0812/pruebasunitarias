const palindromo = require('../utils/palindromo');


test('comparar palindromos', ()=> {


    expect(palindromo('roma')).toBe('amor');

})

test('palindromo de fran', ()=> {

     expect(palindromo('fran')).toBe('narf');

})