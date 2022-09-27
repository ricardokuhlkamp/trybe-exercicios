//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste:
let lista = [2, 3, 2, 5, 8, 2, 3];

function inteiroRepete(lista) {
  let cont = 0;
  let contFinal = 0;
  let inteiro;
  for (let index = 0; index < lista.length; index++) {
    for (let index2 = 0; index2 < lista.length; index2++) {
      if (lista[index] === lista[index2]) {
        cont+=1;
      }
      if(cont > contFinal) {
        contFinal+=cont;
        inteiro=lista[index];
      }
    }  
  }
  return (inteiro);
}

console.log(inteiroRepete(lista))