const funcionarios = (nome) => {
  return {
    fullName: nome,
    email: (((`${nome}`).split(' ')).join('')).toLowerCase() + '@trybe.com',
  }
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'), 
  }
  return employees;
};

console.log(newEmployees(funcionarios))