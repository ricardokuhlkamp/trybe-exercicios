window.onload = function () {
  const agree = document.getElementById('concordo');
  const buttonEnviar = document.getElementById('button-enviar');

  agree.addEventListener('change', enableSubmit)
  buttonEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    validacao()
  })
};


function enableSubmit() {
  const submitBtn = document.querySelector('#button-enviar');
  const agreement = document.querySelector('#concordo');
  submitBtn.disabled = !agreement.checked;
  if (!agreement) {
    alert('necessário aceite')
  }
}

function validacao() {
  let getName = document.getElementById('full-name').value;
  let getEmail = document.getElementById('email').value;
  
  if ((getName.length < 10 || getName.length > 40) || (getEmail.length < 10 || getEmail.length > 50)) {
    alert('Dados Inválidos')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}
