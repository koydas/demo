import { Button, ButtonLight } from './buttons'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

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
        const button = render(<Button>{button_text}</Button>).container.querySelector('button')
        
        expect(button).toHaveStyle('font-family: "Roboto",sans-serif')
        expect(button).toHaveStyle('padding: .25em 1em')
        expect(button).toHaveStyle('background-color: midnightblue')
        expect(button).toHaveStyle('border-color: #101048')
        expect(button).toHaveStyle('border-radius: .5em')
        expect(button).toHaveStyle('color: white')
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
        const button = render(<ButtonLight>{button_text}</ButtonLight>).container.querySelector('button')
        
        expect(button).toHaveStyle('font-size: smaller')
        expect(button).toHaveStyle('cursor: pointer')
        expect(button).toHaveStyle('background: transparent')
        expect(button).toHaveStyle('color: white')
        expect(button).toHaveStyle('border: 0')

        expect(button).toHaveStyle('opacity: 0.7')
    })
})