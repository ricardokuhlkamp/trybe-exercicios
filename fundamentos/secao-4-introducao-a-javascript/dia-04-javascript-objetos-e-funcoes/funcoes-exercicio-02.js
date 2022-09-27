//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste:
let lista = [2, 3, 6, 7, 10, 1];

function maiorIndice(lista) {
  let maiorNumero = lista[0];
  let indice = 0;
  for (let index = 0; index < lista.length; index+=1) {
    if (maiorNumero < lista[index]) {
      indice = index;
    } 
  }
  return indice;
}
console.log(maiorIndice(lista));