/**
Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
 */

const salarioBruto = 2500;

if (salarioBruto <= 1556.94) {
  const valorAliquotaINSS = salarioBruto*0.08;
  const valorAliquotaIR = 0;
  const parcelaIR = 0;
  const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR - parcelaIR;
  console.log("1-Salário líquido: R$ ", salarioLiquido)
} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.93) {
  if (salarioBruto >= 1903.99 && salarioBruto < 2826.66) {
    const valorAliquotaINSS = salarioBruto*0.09;
    const valorAliquotaIR = salarioBruto*0.075;
    const parcelaIR = 142.80;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR - parcelaIR;
    console.log("2-Salário líquido: R$ ", salarioLiquido)
  } else {
    const valorAliquotaINSS = salarioBruto*0.09;
    const valorAliquotaIR = 0;
    const parcelaIR = 0;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR - parcelaIR;
    console.log("3-Salário líquido: R$ ", salarioLiquido)
  }
  
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.83) {
  if (salarioBruto >= 2826.66 && salarioBruto < 3751.06) {
    const valorAliquotaINSS = salarioBruto*0.11;
    const valorAliquotaIR = salarioBruto * 0.15;
    const parcelaIR = 354.80;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR - parcelaIR;
    console.log("4-Salário líquido: R$ ", salarioLiquido)
  } else if (salarioBruto < 2826.66) {
    const valorAliquotaINSS = salarioBruto*0.11;
    const valorAliquotaIR = salarioBruto * 0.075;
    const parcelaIR = 142.80;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
    console.log("5-Salário líquido: R$ ", salarioLiquido)
  } else if (salarioBruto >= 3751.06 && salarioBruto < 4664.69) {
  const valorAliquotaINSS = salarioBruto*0.11;
  const valorAliquotaIR = salarioBruto * 0.225;
  const parcelaIR = 636.13;
  const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR;
  console.log("6-Salário líquido: R$ ", salarioLiquido);
  } else if (salarioBruto > 4664.68) {
    const valorAliquotaINSS = salarioBruto * 0.11;
  const valorAliquotaIR = salarioBruto * 0.275;
  const parcelaIR = 869.36;
  const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR - parcelaIR;
  console.log("7-Salário líquido: R$ ", salarioLiquido);
  }
} else if (salarioBruto >5189.82) {
  if (salarioBruto >= 3751.06 && salarioBruto < 4664.69) {
    const valorAliquotaINSS = 570.88;
    const valorAliquotaIR = salarioBruto * 0.275;
    const parcelaIR = 869.36;
    const salarioLiquido = salarioBruto - valorAliquotaINSS - valorAliquotaIR - parcelaIR;
    console.log("8-Salário líquido: R$ ", salarioLiquido)
  }  
}


