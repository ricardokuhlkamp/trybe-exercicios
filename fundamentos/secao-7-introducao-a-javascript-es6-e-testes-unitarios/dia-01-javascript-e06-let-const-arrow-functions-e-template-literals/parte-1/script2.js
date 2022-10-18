// Crie uma função que retorne um array em ordem crescente.

// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.



const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {

  for (let index = 0; index < array.length; index += 1) {

    for (let index2 = 0; index2 < array.length; index2 += 1) {

      if (array[index] < array[index2]) {
        let position = array[index];
        array[index] = array[index2];
        array[index2] = position;
      }
    }

  }
  return array;
}

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);