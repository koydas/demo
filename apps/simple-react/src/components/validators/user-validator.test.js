import React from 'react'
import { JSDOM } from 'jsdom'
import { validate_user } from "./user-validator";

describe('validate_user', () => {
    const first_name_input = new JSDOM(<input />)
    const last_name_input = new JSDOM(<input />)

    beforeEach(() => {
        first_name_input.value = ""
        last_name_input.value = ""
    })

    it('no values - both', () => {
        const result = validate_user({ first_name_input, last_name_input })

        expect(result).toBe(false)
        
    })

    it('with values - only first name', () => {
        first_name_input.value = "Bob"
        const result = validate_user({ first_name_input, last_name_input })

        expect(result).toBe(false)
        
    })

    it('with values - only last name', () => {
        last_name_input.value = "Gratton"

        const result = validate_user({ first_name_input, last_name_input })

        expect(result).toBe(false)
        
    })

    it('with values - both', () => {
        first_name_input.value = "Bob"
        last_name_input.value = "Gratton"
        
        const result = validate_user({ first_name_input, last_name_input })

        expect(result).toBe(true)
        
    })
})