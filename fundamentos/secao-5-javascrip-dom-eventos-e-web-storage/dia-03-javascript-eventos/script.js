function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Parte 1

//Crie um calendário dinamicamente.
//O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
//Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
//A tag <ul> deve conter o id 'days'
//Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createNumericDays() {
  let ul = document.querySelector('#days');
  ul.setAttribute('id', 'days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dia = decemberDaysList[index];
    let li = document.createElement('li');
    li.innerText = dia;

    ul.appendChild(li);
    if (dia === 24 || dia === 31) {
      li.setAttribute('class', 'day holiday')
    } else if (dia === 4 || dia === 11 || dia === 18) {
      li.setAttribute('class', 'day friday')
    } else if (dia === 25) {
      li.setAttribute('class', 'day friday holiday')
    } else {
      li.setAttribute('class', 'day');
    }
  }
}
createNumericDays();

//-----------------------------------------------------------
//Parte 2

//Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
//Sua função deve receber um parâmetro com a string 'Feriados'
//Adicione a este botão a ID "btn-holiday"
//o a ID "btn-holiday"
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
let divBtnContainer = document.querySelector('.buttons-container');
function criaBtnFeriados(parametro) {
  let novoBotao = document.createElement('button');
  novoBotao.setAttribute('id', 'btn-holiday');
  //let divBtnContainer = document.querySelector('.buttons-container');
  divBtnContainer.appendChild(novoBotao);
  novoBotao.innerHTML = parametro;
  
}
criaBtnFeriados('Feriados');

//-----------------------------------------------------------
//Parte 3

//Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//-Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
//-É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

function alteraCorFeriados() {
  let getBtnHoliday = document.querySelector('#btn-holiday');
  let getAllHoliday = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setColor = 'white';

  getBtnHoliday.addEventListener('click', function() {
    for (let index = 0; index < getAllHoliday.length; index += 1) {
      if (getAllHoliday[index].style.backgroundColor === setColor) {
        getAllHoliday[index].style.backgroundColor = backgroundColor;
      } else {
        getAllHoliday[index].style.backgroundColor = setColor;        
      }      
    }
  })
}

alteraCorFeriados();

//-----------------------------------------------------------
//Parte 4

//Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
//-Sua função deve receber como parâmetro a string “Sexta-feira”;
//-Adicione a esse botão o ID "btn-friday";
//-Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function criaBtnSexta (parametro) {
  let btnSexta = document.createElement('button');
  btnSexta.innerHTML = parametro;
  btnSexta.setAttribute('id', 'btn-friday');
  divBtnContainer.appendChild(btnSexta);
}
criaBtnSexta("Sexta-Feira");

//-----------------------------------------------------------
//Parte 5

//Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
//-É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function sextou(sextaArray) {
  
  let getBtnSexta = document.querySelector("#btn-friday");
  let getAllFriday = document.querySelectorAll('.friday');
  let newText = 'Sextou!';

  getBtnSexta.addEventListener('click', function(){
    for (let index = 0; index < getAllFriday.length; index++) {
      
      if (getAllFriday[index].innerText !== newText) {
        getAllFriday[index].innerText = newText;
      } else {
        getAllFriday[index].innerText = sextaArray[index];
      }
    }
  })
};
let sextasDezembro = [4, 11, 18, 25];
sextou(sextasDezembro);

//-----------------------------------------------------------
//Parte 6

//Implemente duas funções que criem um efeito de “zoom”.
//-Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//-Dica - Propriedade: event.target.

function mouseOver() {
  let allDaysMonth = document.querySelector('#days');  
  allDaysMonth.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });  
};
mouseOver();

function mouseOut() {
  let allDaysMonth = document.querySelector('#days');  
  allDaysMonth.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  }); 
};
mouseOut();

//-----------------------------------------------------------
//Parte 7

//Implemente uma função que adicione uma tarefa personalizada ao calendário.
//-A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//-O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function criarTarefas(parametro) {
  let span = document.createElement('span');
  span.innerText = parametro;
  let getDivMyTasks = document.querySelector('.my-tasks');
  getDivMyTasks.appendChild(span);
};
let tarefa = 'cozinhar';
criarTarefas(tarefa);

//-----------------------------------------------------------
//Parte 8

//Implemente uma função que adicione uma legenda com cor para a tarefa.
//-Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function legendaCorTarefa(color) {
  let newDiv = document.createElement('div');
  let getDivTask = document.querySelector('.my-tasks');
  getDivTask.appendChild(newDiv);
  newDiv.className = 'task';
  newDiv.style.backgroundColor = color;
}
legendaCorTarefa("green");

//-----------------------------------------------------------