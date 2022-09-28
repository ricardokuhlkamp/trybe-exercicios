//1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function descricao() {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerHTML = "Muito Sucesso! E ganhar mais de 5 mil reias mensai!";
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