const inputTextEl = document.querySelectorAll('input[type="text"]')
const inputEmailEl = document.querySelectorAll('input[type="email"]')
const inputPasswordEl = document.querySelectorAll('input[type="password"]')

function validateInput(input) {
    input.addEventListener('input', () => {
        if (input.value === '') {
            input.style.border = '1px solid #ef0000'
        } else {
            input.style.border = '1px solid #0aef52'
        }
    })
}

inputTextEl.forEach((e) => {
    e.addEventListener('input', validateInput(e))
})

inputEmailEl.forEach((e) => {
    e.addEventListener('input', validateInput(e))
})

const passwordEl = document.querySelector('#password')
const confirmPasswordEl = document.querySelector('#confirm-password')

function validatePassword() {
    if ((passwordEl.value === '' && confirmPasswordEl.value === '') && (passwordEl.value === confirmPasswordEl.value)) {
        confirmPasswordEl.style.border = 'none'
        passwordEl.style.border = 'none'

    } else if ((passwordEl.value !== '' && confirmPasswordEl.value !== '') && (passwordEl.value === confirmPasswordEl.value)) {
        confirmPasswordEl.style.border = '1px solid #0aef52'
        passwordEl.style.border = '1px solid #0aef52'

    } else if ((passwordEl.value !== '' && confirmPasswordEl.value !== '') && (passwordEl.value !== confirmPasswordEl.value)) {
        confirmPasswordEl.style.border = '1px solid #ef0000'
        passwordEl.style.border = '1px solid #ef0000'
    }
}

passwordEl.addEventListener('input', validatePassword)
confirmPasswordEl.addEventListener('input', validatePassword)

