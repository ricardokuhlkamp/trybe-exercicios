const hydrate = (bebida) => {
  let splitBebida = bebida.split(' ');
  let copoAgua = 0;
  for (let index = 0; index < splitBebida.length; index += 1) {
    const parse = parseInt(splitBebida[index]);
    if(parse) {
      copoAgua += parse;
    }
    
  }
  let copo = 'copo';
  if(copoAgua > 1) {
    copo = 'copos';
  }
  return `${copoAgua} ${copo} de água`
}

module.exports = hydrate