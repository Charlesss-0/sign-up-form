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

inputPasswordEl.forEach((e) => {
    e.addEventListener('input', validateInput(e))
})