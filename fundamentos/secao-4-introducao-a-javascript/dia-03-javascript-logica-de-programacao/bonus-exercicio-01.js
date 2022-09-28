//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let resultado = "";

for (let index = 0; index < 5; index+=1) {
  resultado="*";
  for (let index2 = 0; index2 < 5; index2+=1) {
    resultado+="*"; 
  }
  console.log(resultado);
}
