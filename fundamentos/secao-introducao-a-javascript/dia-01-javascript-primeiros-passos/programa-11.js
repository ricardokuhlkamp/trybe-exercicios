/**
Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
 */

const salarioBruto = 7000.00;

if (salarioBruto <= 1212.00) {
  const valorAliquotaINSS = salarioBruto*0.075;
  const valorAliquotaIR = 0;
  const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
  console.log("1-Salário líquido: R$ ", salarioLiquido)
} else if (salarioBruto >= 1212.01 && salarioBruto < 2427.36) {
  if (salarioBruto >= 1903.99 && salarioBruto < 2826.66) {
    const valorAliquotaINSS = salarioBruto*0.09;
    const valorAliquotaIR = 142.80;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("2-Salário líquido: R$ ", salarioLiquido)
  } else {
    const valorAliquotaINSS = salarioBruto*0.09;
    const valorAliquotaIR = 0;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("3-Salário líquido: R$ ", salarioLiquido)
  }
  
} else if (salarioBruto >= 2427.36 && salarioBruto < 3641.04) {
  if (salarioBruto >= 2826.66 && salarioBruto < 3751.06) {
    const valorAliquotaINSS = salarioBruto*0.12;
    const valorAliquotaIR = 354.80;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("4-Salário líquido: R$ ", salarioLiquido)
  } else {
    const valorAliquotaINSS = salarioBruto*0.12;
    const valorAliquotaIR = 142.80;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("5-Salário líquido: R$ ", salarioLiquido)
  }
  
} else if (salarioBruto >= 3641.04 && salarioBruto < 7087.23) {
  if (salarioBruto >= 3751.06 && salarioBruto < 4664.69) {
    const valorAliquotaINSS = salarioBruto*0.14;
    const valorAliquotaIR = 636.13;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("6-Salário líquido: R$ ", salarioLiquido)
  } else if (salarioBruto > 4664.68){
    const valorAliquotaINSS = salarioBruto*0.14;
    const valorAliquotaIR = 869.36;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("7-Salário líquido: R$ ", salarioLiquido)
  } else if (salarioBruto <3751.06){
    const valorAliquotaINSS = salarioBruto*0.14;
    const valorAliquotaIR = 354.80;;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("8-Salário líquido: R$ ", salarioLiquido)
  }  
}


