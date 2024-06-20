import { Button, ButtonLight } from './buttons'
import { render, fireEvent } from '@testing-library/react'

describe('Button', () => {
    const button_text = "Add Stuff"
    
    it('children', () => {
        const { container } = render(<Button>{button_text}</Button>)
        
        expect(container.innerHTML).toMatch(button_text)
    })
    
    it('click', () => {
        const click = (e) => console.log(e)
        const { container } = render(<Button onClick={click}>{button_text}</Button>)
        
        expect(container.innerHTML).toMatch(button_text)
    })

    it('styles', () => {
        // TODO
    })
})

describe('ButtonLight', () => {
    it('children', () => {
        const text = "Add light Stuff"
        const { container } = render(<ButtonLight>{text}</ButtonLight>)

        expect(container.innerHTML).toMatch(text)
    })
    
    it('click', () => {
        // TODO
    })

    it('styles', () => {
        // TODO
    })
})