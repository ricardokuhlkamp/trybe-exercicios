let n = 7;
let simbolo = "*";
let meio = (n + 1)/2;
let esquerda = meio;
let direita = meio;
for (let index = 1; index <= meio; index++) {
  let resultado="";
  for (let index2 = 1; index2 <= n; index2++) {
    if (index2==esquerda ||index2 == direita || index == meio) {
      resultado+=simbolo;
    } else {
      resultado+=" ";
    }    
  }
  
  direita+=1;
  esquerda-=1;
  console.log(resultado);  
}