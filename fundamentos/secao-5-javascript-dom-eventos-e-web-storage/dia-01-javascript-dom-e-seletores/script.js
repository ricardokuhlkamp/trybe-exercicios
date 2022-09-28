//1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function descricao() {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerHTML = "Muito Sucesso! E ganhar mais de 5 mil reias mensai!";
}
descricao();

//2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

