/**window.onload = function(){
  
}

//let corDeFundoDaTela = document.body.style.backgroundColor = '#CCFFE5';
*/
function criaSectionContainerBtn() {

  let body = document.body;
  body.setAttribute('class', 'body');
  let sectionBtn = document.createElement('section');
  sectionBtn.classList.add('btn-container');
  body.appendChild(sectionBtn);
}
criaSectionContainerBtn();

//-----------------------------------------------
//Cria botões

function criaBtnCorDeFundo () {
  let btnCorFundo = document.createElement('button');
  let btnCorTexto = document.createElement('button');
  let btnSizeText = document.createElement('button');
  btnCorFundo.setAttribute('id', 'btn-cor-fundo');
  btnCorTexto.setAttribute('id', 'btn-cor-texto');
  btnSizeText.setAttribute('id', 'btn-size-text');
  let sectionBtn = document.querySelector('.btn-container');
  sectionBtn.appendChild(btnCorFundo);
  sectionBtn.appendChild(btnCorTexto);
  sectionBtn.appendChild(btnSizeText);
  btnCorFundo.innerText = "Cor de fundo";
  btnCorTexto.innerText = "Cor do Texto";
  btnSizeText.innerText = "Aumenta o Texto";
}
criaBtnCorDeFundo();


//.....................................................................
//Cria o paragrafo
function paragrafo() {
  let body = document.body;
  let sectionTexto = document.createElement('section');
  sectionTexto.classList.add('texto-container');
  body.appendChild(sectionTexto);

  let p = document.createElement('p');
  p.classList.add('paragrafo');
  sectionTexto.appendChild(p);
  p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae odio sunt eius eos aperiam, quod earum est natus eaque quibusdam, nemo qui fugit aspernatur architecto necessitatibus, labore facilis assumenda."
}
paragrafo()


//----------------------------------------------------------------------
//Alterações


function alteraCorDeFundo () {

  let btnCorTexto = document.querySelector('#btn-cor-texto');

  btnCorTexto.addEventListener('click', function() {
    let p = document.querySelector('p');
    if (p.style.color === 'white') {
      p.style.color = 'black';      
      let corLetra = p.style.color;
      localStorage.setItem('keyCorLetra', JSON.stringify(corLetra));
    } else {
      p.style.color = 'white';      
      let corLetra = p.style.color;
      localStorage.setItem('keyCorLetra', JSON.stringify(corLetra));    
    }      
  });
}
alteraCorDeFundo ();

function alteraCorDasLetras () {

  let btnCorFundo = document.querySelector('#btn-cor-fundo');

  btnCorFundo.addEventListener('click', function() {
    let body = document.body;
    if (body.style.backgroundColor === 'rgb(202, 224, 217)') {
      body.style.backgroundColor = 'red';      
      let cor = body.style.backgroundColor;
      localStorage.setItem('corFundo', JSON.stringify(cor));
      console.log(cor);
    } else {
      body.style.backgroundColor = 'rgb(202, 224, 217)';
      let cor= body.style.backgroundColor;
      localStorage.setItem('corFundo', JSON.stringify(cor));
      console.log(cor);   
    }      
  });
}
alteraCorDasLetras ();

function alteraTamanhoDasLetras () {

  let btnSizeText = document.querySelector('#btn-size-text');

  btnSizeText.addEventListener('click', function() {
    let p = document.querySelector('p');
    if (p.style.fontSize === '17px') {
      p.style.fontSize = '30px';      
      let tamanho = p.style.fontSize;
      localStorage.setItem('keySize', JSON.stringify(tamanho));
      console.log(tamanho);
    } else {
      p.style.fontSize = '17px';      
      let tamanho = p.style.fontSize;
      localStorage.setItem('keySize', JSON.stringify(tamanho));
      console.log(tamanho);
    }      
  });
  
}
alteraTamanhoDasLetras ();
/*
let p = document.querySelector('p');
p.style.fontSize = '50px';

*/





//------------------------------------------------------------------------
//Resgata no localStorage

function resgateLocalStorage() {
  let corFundo = JSON.parse(localStorage.getItem('corFundo'));
  document.body.style.backgroundColor = corFundo;
  
  let corDaLetra = JSON.parse(localStorage.getItem('keyCorLetra'));
  let p =document.querySelector('.paragrafo');
  p.style.color = corDaLetra;
  
  let tamanhoLetra = JSON.parse(localStorage.getItem('keySize'));
  p.style.fontSize = tamanhoLetra;

}
resgateLocalStorage();







