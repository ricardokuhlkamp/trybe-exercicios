//Lidando com Arrays

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let valores =[];
for (let index = 1; index <= 25; index++) {
  valores.push(index);  
}
console.log("valores", valores)
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let valoresDivididos = [];
for (let index = 0; index < valores.length; index++) {
  valoresDivididos.push(valores[index]/2);  
}
console.log("valores divididos por dois: ", valoresDivididos);