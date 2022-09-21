/*
Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

const nota = 90;

if (nota >= 90) {
  if (nota <= 100) {
    console.log("A");
  } else {
    console.log("Erro: Nota passada superior ao limite de 100");
  }
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else if (nota < 50 && nota >=0) {
  console.log("F");
} else if (nota < 0) {
  console.log("Erro: Nota passada inferior ao limite de 0");
} else {
  console.log("valor inválido");
}