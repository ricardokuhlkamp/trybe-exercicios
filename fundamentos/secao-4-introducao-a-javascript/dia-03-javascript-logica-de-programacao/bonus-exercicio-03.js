let numero = 5;
let resultado = "";

for (let index = 0; index < 5; index+=1) {
  
  
  for (let index2 = 0; index2 < 5; index2+=1) {
    if (index2 < numero -1) {
      resultado += " ";
    } else {
      resultado += "*";     
    }      
    
  }
  console.log(resultado)
    resultado = "";
    numero -= 1;
}