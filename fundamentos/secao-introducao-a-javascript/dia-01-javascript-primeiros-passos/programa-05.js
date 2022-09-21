/*
Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
*/

const alfa = 60;
const beta = 60;
const gama = 60;
let somaAngulos = alfa + beta + gama;

if(somaAngulos == 180) {
  console.log(true)
} else {
  console.log(false)
  if (alfa < 0 && beta < 0 && gama < 0) {
    console.log("Erro: o angulo alfa, beta e gama são negativos")
  } else if (alfa < 0 && beta < 0 && gama > 0) {
    console.log("Erro: o angulo alfa e beta são negativos")
  } else if (alfa < 0 && beta > 0 && gama > 0) {
    console.log("Erro: o angulo alfa é negativo")
  } else if (alfa > 0 && beta < 0 && gama < 0) {
    console.log("Erro: o angulo beta e gama são negativos")
  } else if (alfa > 0 && beta < 0 && gama > 0) {
    console.log("Erro: o angulo beta é negativo")
  } else if (alfa < 0 && beta > 0 && gama < 0) {
    console.log("Erro: o angulo alfa e gama são negativos")
  } else if (alfa > 0 && beta > 0 && gama < 0) {
    console.log("Erro: o angulo gama é negativo")
  } 
} 