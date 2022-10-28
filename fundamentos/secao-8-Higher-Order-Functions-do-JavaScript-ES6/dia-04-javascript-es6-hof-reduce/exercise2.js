// 🚀 Exercício 2

// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(books) {
  // escreva seu código aqui
  return books.reduce((acc, nome) => `${acc} ${nome.author.name},`, '')
}

// console.log(reduceNames(books))

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult2 = 43;

function averageAge(books) {
  // escreva seu código aqui
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (sum + (book.releaseYear - book.author.birthYear)), 0);
  return sumOfAges / numberOfBooks;
}

// console.log(averageAge(books))

// Encontre o livro com o maior nome.


const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook(books) {
  // escreva seu código aqui
  const maiorNome = books.reduce((acc, curr) => (curr.name.length > acc ? curr : acc), 0)
  return maiorNome;
}
// console.log(longestNamedBook(books))

// 🚀 Exercício 3
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult4 = 20;

function containsA(names) {
  let result = 0;
  names.forEach(name => result += name.split('')
    .reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc + 1 : acc, 0)
  );
  return result;
}
console.log(containsA(names))