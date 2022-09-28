//Lidando com Arrays
//Iremos utilizar esse array para realizar os próximos exercícios.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
  
  
}
console.log(maiorNumero)