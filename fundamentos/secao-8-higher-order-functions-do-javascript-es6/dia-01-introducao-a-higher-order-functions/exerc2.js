const verificador = (meuNum, numGerado) => meuNum === numGerado;

const sorteador = (num, callback) => {
  const numGerado = Math.floor(Math.random() * 5) + 1;
  return callback(num, numGerado) ? 'Parabéns vc acertou!' : 'Tente novamente';
}

console.log(sorteador(2, verificador));