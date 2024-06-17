import React from "react"
import { Button } from "../../forms/buttons.js"
import { Form } from "../../forms/form.js"
import { Input } from "../../forms/input.styles.js"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { validate_user } from '../../validators/user-validator.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function validate_form() {
    const first_name_input = document.querySelector('#first_name')
    const last_name_input = document.querySelector('#last_name')

    return validate_user({ first_name_input, last_name_input })
}

function resetValue(input) {
    input.value = ''
}

export function resetForm() {
    resetValue(document.querySelector('#first_name'))
    resetValue(document.querySelector('#last_name'))
}

function new_id(users) {
    return users?.length > 0
        ? Math.max(...users.map(x => x.id)) + 1
        : 1
}

export function get_user(users) {
    const id = new_id(users)

    const first_name = document.querySelector('#first_name').value
    const last_name = document.querySelector('#last_name').value

    return { id, first_name, last_name }
}

const UserForm = ({ add }) =>
    <Form id="add-user" onSubmit={add}>
        <Input id='first_name' placeholder='first name' />
        <Input id='last_name' placeholder='last name' />

        <Button><FontAwesomeIcon icon={faAdd} /></Button>
    </Form>

export default UserForm