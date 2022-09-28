
 function palindromo(palavra) {
  for(index in palavra) {
    if (palavra[index] != palavra[(palavra.length - 1) - index]) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(palindromo("ricardo"))
//or
function palindromo2(palavra) {  
  let reverso = palavra.split('').reverse().join('');
  
  if(reverso === palavra) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromo2("arara"));