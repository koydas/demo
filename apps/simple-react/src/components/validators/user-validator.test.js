import React from 'react'
import '@testing-library/dom'
import { validate_user } from "./user-validator";

describe('validate_user', () => {
    it('no values - both', () => {
        const first_name_input = () => document.createElement(<input value='ok'/>)
        const last_name_input = () => document.createElement(<input />)

        const result = validate_user({ first_name_input, last_name_input })

        expect(result).toBe(false)
        
    })

    // it('no values - first name', () => {
    //     const first_name_input = <input />
    //     const last_name_input = <input value='Gratton' />

    //     const result = validate_user({ first_name_input, last_name_input })

    //     expect(result).toBe(false)
        
    // })

    // it('no values - last name', () => {
    //     const first_name_input = <input value="Bob" />
    //     const last_name_input = <input />

    //     const result = validate_user({ first_name_input, last_name_input })

    //     expect(result).toBe(false)
        
    // })

    // it('with values - both', () => {
    //     const first_name_input = <input value='Bob' />
    //     const last_name_input = <input value='Gratton' />

    //     const result = validate_user({ first_name_input, last_name_input })

    //     expect(result).toBe(true)
        
    // })
})