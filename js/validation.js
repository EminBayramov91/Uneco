var form = document.querySelector('.union__content-form')
var validateBtn = form.querySelector('.union__content-form-btn')

var lastName = form.querySelector('.last-name')
var firstName = form.querySelector('.first-name')
var text = form.querySelector('.input-text')
var fields = form.querySelectorAll('.field')


form.addEventListener('submit' , function (event) {
    event.preventDefault()

    var errors = form.querySelectorAll('.union__content-form-error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      var error = document.createElement('div')
      error.className = 'union__content-form-error'
      error.style.color = 'red'
      error.innerHTML = 'Это поле необходимо заполнить корректно'
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
    

    
})