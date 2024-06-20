import { Button, ButtonLight } from './buttons'
import { render, fireEvent } from '@testing-library/react'

describe('Button', () => {
    const button_text = "Add Stuff"
    
    it('children', () => {
        const { container } = render(<Button>{button_text}</Button>)
        
        expect(container.innerHTML).toMatch(button_text)
    })
    
    it('click', () => {
        let clicked = false
        const click = () => { clicked = true }
        const { container } = render(<Button onClick={click}>{button_text}</Button>)
        
        expect(clicked).toBe(false)
        container.querySelector('button').click()

        expect(clicked).toBe(true)
    })

    it('styles', () => {
        // TODO
    })
})

describe('ButtonLight', () => {
    const button_text = "Add light Stuff"

    it('children', () => {
        const { container } = render(<ButtonLight>{button_text}</ButtonLight>)

        expect(container.innerHTML).toMatch(button_text)
    })
    
    it('click', () => {
        let clicked = false
        const click = () => { clicked = true }
        const { container } = render(<ButtonLight onClick={click}>{button_text}</ButtonLight>)
        
        expect(clicked).toBe(false)
        container.querySelector('button').click()

        expect(clicked).toBe(true)
    })

    it('styles', () => {
        // TODO
    })
})