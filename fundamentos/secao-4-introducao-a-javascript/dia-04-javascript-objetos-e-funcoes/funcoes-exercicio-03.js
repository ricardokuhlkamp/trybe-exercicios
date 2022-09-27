//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste:
let lista = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(lista) {
  let menorNumero = lista[0];
  let indice = 0;
  for (let index = 0; index < lista.length; index+=1) {
    if (menorNumero > lista[index]) {
      indice = index;
    } 
  }
  return indice;
}
console.log(menorIndice(lista));