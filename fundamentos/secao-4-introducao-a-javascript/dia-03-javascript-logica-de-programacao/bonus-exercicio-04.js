//faça uma pirâmide com n asteriscos de base:
/**
 
n = 5

  *
 ***
*****

 */

let n = 5;
let simbolo = "*";
let meio = (n + 1)/2;
let esquerda = meio;
let direita = meio;
let resultado = "";

for (let index = 0; index <= meio; index++) {
  for (let index2 = 0; index2 <= n; index2++) {
    if (index2>esquerda && index2<direita) {
      resultado+=simbolo;
    } else {
      resultado+=" ";
    }
    
  }
  console.log(resultado);
  resultado="";
  direita+=1;
  esquerda-=1;
}