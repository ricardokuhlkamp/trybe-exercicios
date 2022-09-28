//Lidando com Arrays
//Iremos utilizar esse array para realizar os próximos exercícios.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Calcule e imprima a média aritmética dos valores contidos no array;

//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}
let media = soma / numbers.length;
if (media > 20) {
  console.log("valor maior que 20");
  console.log("media: ", media);
} else {
  console.log("valor igual ou menor que 20");
  console.log("media: ", media);
}

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;