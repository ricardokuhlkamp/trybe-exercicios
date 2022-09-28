//Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let palavraMaior = array[0];
let palavraMenor = array[0];;
for (let index = 0; index < array.length; index++) {  
  if (array[index].length > palavraMaior.length) {
    palavraMaior= array[index];
  }
  if (array[index].length < palavraMenor.length) {
    palavraMenor= array[index];
  }    
}
console.log("A maior palavra é: ", palavraMaior);
console.log("A menor palavra é: ", palavraMenor);