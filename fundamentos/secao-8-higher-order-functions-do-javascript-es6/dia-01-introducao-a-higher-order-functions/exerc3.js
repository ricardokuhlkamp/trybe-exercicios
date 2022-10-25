const verificaQuestoes = (right, student) => {
  let result = 0;
  for (let index = 0; index < right.length; index += 1) {
    if (right[index] === student[index]) {
      result += 1;
    } else if (student[index] === 'N.A'){
      result +=0;
    } else if (right[index] !== student[index] && right[index] !== 'N.A') {
      result -= 0.5;
    }        
  }
  return result;
}
const notaFinal = (right_answers, student_answers, callback) => {
  return `A nota final é: ${callback(right_answers, student_answers)} !`
}

const right_answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(notaFinal(right_answers, student_answers, verificaQuestoes));