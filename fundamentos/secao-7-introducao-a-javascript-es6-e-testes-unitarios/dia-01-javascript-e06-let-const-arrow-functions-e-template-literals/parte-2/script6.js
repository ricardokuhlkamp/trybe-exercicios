const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  let array = frase.split(" ");
  for (let index = 0; index < array.length; index++) {
    array[index] === 'x' && (array[index] = nome);
  }
  return array.join(' ')
}

const minhasSkills = (func) => {
  const skills = ['Javascript', 'HTML', 'CSS'];
  let resultado = `${func}
  Minhas três principais habilidades são:`
  for (let index = 0; index < skills.length; index++) {
    resultado = `${resultado}
    - ${skills[index]}`;
    
  }
  return resultado
}
console.log(minhasSkills(substituaX('Bebeto')));