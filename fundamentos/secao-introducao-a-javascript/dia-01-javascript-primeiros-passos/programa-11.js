/**
Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
 */

const salBruto = 3000;
if (salBruto <= 1556.94) {
  const alqINSS = salBruto * 0.08;
  const salBase = salBruto - alqINSS;  
  const alqIR = 0;
  const parcIR = 0;
  const valIR = alqIR * salBase - parcIR;
  const salLiq = salBase - valIR;
  console.log("1-Resultado: R$ ", salLiq);
} else if (salBruto >= 1556.95 && salBruto < 2594.93) {
  const alqINSS = salBruto * 0.09;
  const salBase = salBruto - alqINSS;
  if (salBase <= 1903.98) {
    const alqIR = 0;
    const parcIR = 0;
    const valIR = alqIR * salBase - parcIR;
    const salLiq = salBase - valIR;
    console.log("2-Resultado: R$ ", salLiq);
  } else if (salBase > 1903.98 && salBase <= 2826.65) {
    const alqIR = 0.075;
    const parcIR = 142.80;
    const valIR = alqIR * salBase - parcIR;
    const salLiq = salBase - valIR;
    console.log("3-Resultado: R$ ", salLiq);
  }
} else if (salBruto >= 2594.93 && salBruto < 5189.83) {
  const alqINSS = salBruto * 0.11;
  const salBase = salBruto - alqINSS;
  console.log(salBase)
  if (salBase > 2826.65 && salBase < 3751.06) {
    const alqIR = 0.15;
    const parcIR = 354.80;
    const valIR = alqIR * salBase - parcIR;
    const salLiq = salBase - valIR;
    console.log("4-Resultado: R$ ", salLiq);
  } else if (salBase >= 3751.06 && salBase < 4664.69) {
    const alqIR = 0.225;
    const parcIR = 636.13;
    const valIR = alqIR * salBase - parcIR;
    const salLiq = salBase - valIR;
    console.log("5-Resultado: R$ ", salLiq);  
  } else if (salBase > 4664.68) {
    const alqIR = 0.275;
    const parcIR = 869.36;
    const valIR = alqIR * salBase - parcIR;
    const salLiq = salBase - valIR;
    console.log("5-Resultado: R$ ", salLiq);  
  } else if (salBase > 1903.98 && salBase <= 2826.65) {
    const alqIR = 0.075;
    const parcIR = 142.80;
    const valIR = alqIR * salBase - parcIR;
    const salLiq = salBase - valIR;
    console.log("6-Resultado: R$ ", salLiq);
  }

} else if (salBruto > 5189.92) {
  const alqINSS = 570.88;
  const salBase = salBruto - alqINSS;
  if (salBase > 4664.68) {
    const alqIR = 0.275;
    const parcIR = 869.36;
    const valIR = alqIR * salBase - parcIR;
    const salLiq = salBase - valIR;
    console.log("7-Resultado: R$ ", salLiq); 
  }
}