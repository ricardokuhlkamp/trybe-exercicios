// Exercício 2

// Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
// De olho na dica 👀: use o parâmetro rest.

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

console.log(sum(4,5,6))