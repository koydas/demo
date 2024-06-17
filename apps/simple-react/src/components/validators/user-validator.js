export function validate_user({ first_name_input, last_name_input }) {
    let valid = true

    valid &&= validate_input(first_name_input)
    valid &&= validate_input(last_name_input)

    return valid
}

function validate_input(input) {
    
    if (!input.value) {
        input.classList?.add('invalid')
console.log('nope')
console.log(input.value)
        return false
    }

    input.classList?.remove('invalid')

    return true
}