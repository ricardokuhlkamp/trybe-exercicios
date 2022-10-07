const buttonEnviar = document.getElementById('button-enviar');
console.log(buttonEnviar);

function validacao() {
  let getName = document.getElementById('full-name').value;
  let getEmail = document.getElementById('email').value;
  console.log(getName)
  if ((getName.length < 10 || getName.length > 40) || (getEmail.length < 10 || getEmail.length > 50)) {
    alert('Dados Inválidos')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}

buttonEnviar.addEventListener('click', function(event){
  event.preventDefault();
  //let nameValue = document.getElementById('full-name').value;
  validacao()
})


