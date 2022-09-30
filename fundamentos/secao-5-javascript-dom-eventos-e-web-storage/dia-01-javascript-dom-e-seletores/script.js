//1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function descricao() {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerText = "Muito Sucesso! E ganhar mais de 5 mil reias mensai!";
}
descricao();

//2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function corQuadrado() {
  let quadrado = document.getElementsByClassName("main-content")[0];
  quadrado.style.backgroundColor = "rgb(76,164,109)"
}
corQuadrado();

//3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function corQuadradoCentral() {
  let quadrado = document.getElementsByClassName("center-content")[0];
  quadrado.style.backgroundColor = "white"
}
corQuadradoCentral();

//4. Crie e execute uma função que corrija o texto da tag <h1>.

function textoTitulo() {
  let titulo = document.getElementsByClassName("title")[0];
  titulo.innerHTML = "Sucesso!";
}
textoTitulo();

//5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

function paragrafoUmMaiusculo() {
  document.getElementsByTagName("p")[0].style.textTransform = "uppercase";
}
paragrafoUmMaiusculo();

//6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function consoleLog() {
  let array = document.getElementsByTagName("p");
  for (let index = 0; index < array.length; index++) {
    console.log(document.getElementsByTagName("p")[index].innerText);    
  }
}
consoleLog();