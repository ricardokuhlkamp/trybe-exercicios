window.onload = function () {

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

  function criaBtnCorDeFundo() {
    let btnCorFundo = document.createElement('button');
    let btnCorTexto = document.createElement('button');
    let btnSizeText = document.createElement('button');
    let btnEspLinhas = document.createElement('button');
    let btnFontFamily = document.createElement('button');
    btnCorFundo.setAttribute('id', 'btn-cor-fundo');
    btnCorTexto.setAttribute('id', 'btn-cor-texto');
    btnSizeText.setAttribute('id', 'btn-size-text');
    btnEspLinhas.setAttribute('id', 'btn-esp-linhas');
    btnFontFamily.setAttribute('id', 'btn-font-family');
    let sectionBtn = document.querySelector('.btn-container');
    sectionBtn.appendChild(btnCorFundo);
    sectionBtn.appendChild(btnCorTexto);
    sectionBtn.appendChild(btnSizeText);
    sectionBtn.appendChild(btnEspLinhas);
    sectionBtn.appendChild(btnFontFamily);
    btnCorFundo.innerText = "Cor de fundo";
    btnCorTexto.innerText = "Cor do Texto";
    btnSizeText.innerText = "Aumenta o Texto";
    btnEspLinhas.innerText = "Espaçamento";
    btnFontFamily.innerText = "Font Family";
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

  function alteraCorDeFundo() {

    let btnCorTexto = document.querySelector('#btn-cor-texto');

    btnCorTexto.addEventListener('click', function () {
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
  alteraCorDeFundo();

  function alteraCorDasLetras() {

    let btnCorFundo = document.querySelector('#btn-cor-fundo');

    btnCorFundo.addEventListener('click', function () {
      let body = document.body;
      if (body.style.backgroundColor === 'rgb(202, 224, 217)') {
        body.style.backgroundColor = '#2b2b2b';
        let cor = body.style.backgroundColor;
        localStorage.setItem('corFundo', JSON.stringify(cor));
        console.log(cor);
      } else {
        body.style.backgroundColor = 'rgb(202, 224, 217)';
        let cor = body.style.backgroundColor;
        localStorage.setItem('corFundo', JSON.stringify(cor));
        console.log(cor);
      }
    });
  }
  alteraCorDasLetras();

  function alteraTamanhoDasLetras() {

    let btnSizeText = document.querySelector('#btn-size-text');

    btnSizeText.addEventListener('click', function () {
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
  alteraTamanhoDasLetras();

  function alteraEspacamento() {

    let btnEspLinhas = document.querySelector('#btn-esp-linhas');

    btnEspLinhas.addEventListener('click', function () {
      let p = document.querySelector('p');
      if (p.style.lineHeight === '1.2') {
        p.style.lineHeight = '3';
        let espacoLinhas = p.style.lineHeight;
        localStorage.setItem('keyEspacamento', JSON.stringify(espacoLinhas));
      } else {
        p.style.lineHeight = '1.2';
        let espacoLinhas = p.style.lineHeight;
        localStorage.setItem('keyEspacamento', JSON.stringify(espacoLinhas));
      }
    });
  }
  alteraEspacamento();

  function alteraFontFamily() {

    let btnFontFamily = document.querySelector('#btn-font-family');

    btnFontFamily.addEventListener('click', function () {
      let p = document.querySelector('p');
      if (p.style.fontFamily === 'serif') {
        p.style.fontFamily = 'Arial';
        let fonteFamilia = p.style.fontFamily;
        localStorage.setItem('keyFontFamily', JSON.stringify(fonteFamilia));
      } else {
        p.style.fontFamily = 'serif';
        let fonteFamilia = p.style.fontFamily;
        localStorage.setItem('keyFontFamily', JSON.stringify(fonteFamilia));
      }
    });
  }
  alteraFontFamily();

  //------------------------------------------------------------------------
  //Resgata no localStorage

  function resgateLocalStorage() {
    let corFundo = JSON.parse(localStorage.getItem('corFundo'));
    document.body.style.backgroundColor = corFundo;

    let corDaLetra = JSON.parse(localStorage.getItem('keyCorLetra'));
    let p = document.querySelector('.paragrafo');
    p.style.color = corDaLetra;

    let tamanhoLetra = JSON.parse(localStorage.getItem('keySize'));
    p.style.fontSize = tamanhoLetra;

    let tamanhoEspacamento = JSON.parse(localStorage.getItem('keyEspacamento'));
    p.style.lineHeight = tamanhoEspacamento;

    let familiaFonte = JSON.parse(localStorage.getItem('keyFontFamily'));
    p.style.fontFamily = familiaFonte;
  }
  resgateLocalStorage();
}