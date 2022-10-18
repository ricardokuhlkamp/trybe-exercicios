// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [5,4,6,20,1];

oddsAndEvens.sort((a, b) => {
  return a>b?1:a<b?-1:0;
});

console.log(oddsAndEvens)