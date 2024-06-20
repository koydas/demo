import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page, { LinkDesktop, LinkMobile } from './page'

describe('Links', () => {
    const mobile = render(<LinkMobile />).container.querySelector('a')
    const desktop = render(<LinkDesktop />).container.querySelector('a')

    function assert(link, { href, text }) {
        expect(link).toHaveAttribute('href', href)
        expect(link.innerHTML).toBe(text)
    }

    it('Mobile', () => assert(mobile, { href: '/mobile', text: 'Mobile' }))
    it('Desktop', () => assert(desktop, { href: '/desktop', text: 'Desktop' }))
})

describe('Page', () => {
    const page = render(<Page />)

    it('Has List', () => {
        // TODO
    })

    it('Has Two Links', () => {
        // TODO LinkMobile
        // TODO LinkDesktop
    })
})