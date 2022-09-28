//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: 
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes) {
  let tamanhoNome = 0;
  let nome = "";
  for (let index = 0; index < nomes.length; index+=1) {
    if(tamanhoNome < nomes[index].length) {
      tamanhoNome = nomes[index].length;
      nome = nomes[index];
    }
  }
  return nome;
}
console.log(maiorNome(nomes))