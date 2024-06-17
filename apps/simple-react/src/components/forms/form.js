import React from 'react'
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

export const Form = ({ children, onSubmit }) => <form onSubmit={e => _onSubmit(e, onSubmit)}>{children}</form>