import Form from './form'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Form', () => {
    it('children', () => {
        const val = "My Value"
        const form = render(<Form><input id='one' value={val} /></Form>).container.querySelector('form')

        expect(form.querySelector("#one")).toBeDefined()
        expect(form.querySelector("#one").value).toBe(val)

    })

    it('on submit', () => {
        const val = "My Value"
        let callback_called = false
        function test_submit(e) {
            callback_called = true
            expect(e.defaultPrevented).toBe(true)
        }

        const form = render(<Form onSubmit={test_submit}></Form>).container.querySelector('form')

        expect(callback_called).toBe(false)
        form.submit()
        expect(callback_called).toBe(true)

    })

    it('styles', () => {
        const form = render(<Form />).container.querySelector('form')

        expect(form).toHaveStyle("display: flex")
        expect(form).toHaveStyle("justify-content: space-around")
        expect(form).toHaveStyle("align-items: center")

    })
})
