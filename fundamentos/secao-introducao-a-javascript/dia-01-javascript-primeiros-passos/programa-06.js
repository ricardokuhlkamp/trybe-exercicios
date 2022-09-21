/*
Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

const pecaXadrez = "TORRE";
switch (pecaXadrez.toLowerCase()) {
  case "peão":
    console.log("uam a duas casa no início para frente, após somente uma casa para frente, e toma peças uma casa à direita ou à esquerda e sempre para frente");
    break;
  case "cavalo": 
    console.log("movimento em L contendo 3 casas");
    break;
  case "bispo": 
    console.log("diagonais");
    break;
  case "torre":
    console.log("movimento para esquerda, para direita, para frente e para traz");
    break;
  case "rainha":
    console.log("movimento para esquerda, para direita, para frente, para traz e diagonais");
    break;
  case "rei":
    console.log("movimento para esquerda, para direita, para frente, para traz e diagonais, limitado auma casa");
    break;
  default:
    console.log("peça inválida")
    break;
}