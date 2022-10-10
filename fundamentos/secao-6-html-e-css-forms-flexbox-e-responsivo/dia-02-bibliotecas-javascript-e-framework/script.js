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




  // let getName = document.getElementById('full-name').value;
  // let getEmail = document.getElementById('email').value;
  
  // if ((getName.length < 10 || getName.length > 40) || (getEmail.length < 10 || getEmail.length > 50)) {
  //   alert('Dados Inválidos')
  // } else {
  //   alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  // }
//}


///PickDay

// var field = document.getElementById('datepicker');
// var picker = new Pikaday({
//     onSelect: function(date) {
//         field.value = picker.toString();
//     }
// });
// field.parentNode.insertBefore(picker.el, field.nextSibling);

const validation = new JustValidate('#form');

    validation
      .addField('#name', [
        {
          rule: 'minLength',
          value: 10,
        },
        {
          rule: 'maxLength',
          value: 40,
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Email is required',
        },
        {
          rule: 'email',
          errorMessage: 'Email is invalid!',
        },
      ]);

    var picker = new Pikaday({
      field: document.getElementById('datepicker'),
      format: 'D MMM YYYY',
      onSelect: function () {
        console.log(this.getMoment().format('Do MMMM YYYY'));
      }
    });

