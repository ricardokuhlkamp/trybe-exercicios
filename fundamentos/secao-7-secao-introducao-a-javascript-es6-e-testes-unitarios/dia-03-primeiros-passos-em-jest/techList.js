const list = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
const nome = 'Lucas';

const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';
  const sortArray = array.sort();
  let result = [];
  
  for (let index = 0; index < sortArray.length; index++) {
    result.push({
      tech: array[index],
      name
    });    
  }
  return result;
}

module.exports = {
  techList
}