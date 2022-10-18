longestWord ='Antônio foi ao banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

const bigWord = palavra => {
  let array = [];
  let count = 0;
  let word = '';
  array = palavra.split(" ");
  for (const item of array) {
    if (item.length > count) {
      count = item.length;
      word = item;
    }
  }
  return word;
}

console.log(bigWord(longestWord));

