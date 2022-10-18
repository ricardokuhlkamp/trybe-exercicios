// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Com base nessas informações:

// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).

// Dentro da função crie uma variável result, que será o retorno final da função.

// Crie a lógica para retornar o fatorial de N!.

// Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).

const fatorial = (n) => {
  let result = 1;
  for (let index = n; index > 0 ; index -= 1) {
    result = result * index;    
  }
  return result;
}

console.log(`Esse é o resultado da função: ${fatorial(4)}`)