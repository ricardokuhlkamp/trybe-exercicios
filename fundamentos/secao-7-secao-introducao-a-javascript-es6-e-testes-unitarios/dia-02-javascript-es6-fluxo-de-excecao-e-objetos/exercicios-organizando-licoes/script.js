const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const func = (object, turno, value) => object[turno]= value;
// func(lesson2, 'turno', 'noite')
// console.log(lesson2);

// const chaves = (objeto) => Object.keys(objeto);
// console.log(chaves(lesson1));

// const count = objeto => Object.keys(objeto).length;
// console.log(count(lesson2));

const values = objeto => Object.values(objeto);
console.log(values(lesson2));

const allLesson = Object.assign({}, {lesson1, lesson2, lesson3});

const func3 = () => {
  const sum = allLesson.lesson1.numeroEstudantes + allLesson.lesson2.numeroEstudantes + allLesson.lesson3.numeroEstudantes;
  return sum;
}
console.log(func3())

const func4 = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  console.log(Object.keys(obj))
  for (index in array) {
    total = total + obj[array[index]].numeroEstudantes;
  }
  return total;
}
console.log(func4(allLesson))

const getValueByNumber = (obj,number) => Object.values(obj)[number];

console.log(getValueByNumber(lesson1, 2));

const verificaChaveValor = (obj, key, value) => {
  const array = Object.entries(obj);
  let resultado = false;
  for (let index in array) {
    
    if (array[index][0] === key && array[index][1] === value) {
      resultado = true;
      
    }
  }
  return resultado;
}

console.log(verificaChaveValor(lesson2,'materia','Carlos'));
