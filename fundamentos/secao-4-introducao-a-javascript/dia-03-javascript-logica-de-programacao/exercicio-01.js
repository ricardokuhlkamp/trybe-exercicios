//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let resultado = 1;
for (let index = 10; index > 0; index -= 1) {  
  resultado = resultado * index;
}

console.log(resultado);