import React from 'react'
import { Form as FormStyled } from './form.styles.js'
import { Button, ButtonLight } from './buttons.js'
import { Input } from './input.js'

function _onSubmit(e, callback) {
    e.preventDefault()

    if (callback) {
        callback(e)
    }

    // validate
    // submit
}

export const Form = ({ children, onSubmit }) => <FormStyled onSubmit={e => _onSubmit(e, onSubmit)}>{children}</FormStyled>

export default Form