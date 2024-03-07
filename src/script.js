const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const errorBox = document.querySelector('#error')
const button = document.querySelector('#btn')

function validateEmail(event) {
    event.preventDefault()
    
    if(!email.checkValidity()) {
        emailInput.classList.add('active')
        emailInput.value = 'example@email.com'
        emailInput.setCustomValidity('Please provide a valid email address')
        errorBox.innerText = emailInput.validationMessage
    } else {
        emailInput.classList.remove('active')
        emailInput.value = ''
        errorBox.innerText = ''
    }
}

button.addEventListener('click', validateEmail)