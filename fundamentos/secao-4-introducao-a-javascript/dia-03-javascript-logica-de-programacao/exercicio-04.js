//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, 
// ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que 
//retorne o maior número primo entre 2 e 50.

let i = 2;
let f = 50;
let count = 0;
let lista =[];
for (let numero = i; numero < f; numero+=1) {
  count = 0;
  for (let divisor = 0; divisor <= numero; divisor+=1) {
    if (numero % divisor == 0) {
      count += 1;
    }    
  }
  if (count == 2) {
    lista.push(numero);
  }  
}
let maiorNumero = lista[0];
for (let index = 0; index < lista.length; index+=1) {  
  if(lista[index] > maiorNumero) {
    maiorNumero= lista[index];
  }  
}
console.log("O maior numero primo ente " + i + " e " + f + " é " + maiorNumero + " !");