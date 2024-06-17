export function validate_user({ first_name_input, last_name_input }) {
    const first_name_valid = validate_input(first_name_input)
    const last_name_valid = validate_input(last_name_input)

    return first_name_valid && last_name_valid
}

function validate_input(input) {
    
    if (!input.value) {
        input.classList?.add('invalid')

        return false
    }

    input.classList?.remove('invalid')

    return true
}