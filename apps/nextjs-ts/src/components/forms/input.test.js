import Input from './input'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Input', () => {
    it('styles', () => {
        const input = render(<Input />).container.querySelector('input')

        expect(input).toHaveStyle("background-color: transparent")
        expect(input).toHaveStyle("color: white")
        expect(input).toHaveStyle("border-style: solid")
        expect(input).toHaveStyle("border-radius: .25em")
        expect(input).toHaveStyle("padding: .5em")
        expect(input).toHaveStyle("min-width: 1em")
        expect(input).toHaveStyle("margin-right: 1em")

// TODO
// &:first-letter {
//   text-transform: uppercase;
// }

// TODO
// &.invalid {
//   border-color: red;
//   background-color: #f007;
//   color: white;
// }`
    })
})
