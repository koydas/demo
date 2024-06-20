import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page, { LinkDesktop, LinkMobile } from './page'

describe('Links', () =>{
    it('Mobile', () => {
        expect(LinkMobile).toBeDefined()
        expect(typeof LinkMobile).toBe('function')
        
        const props = LinkMobile().props
        
        expect(props.href).toBe('/mobile')
        expect(props.children).toBe('Mobile')
    })

    it('Desktop', () => {
        expect(LinkDesktop).toBeDefined()
        expect(typeof LinkDesktop).toBe('function')
        
        const props = LinkDesktop().props
        
        expect(props.href).toBe('/desktop')
        expect(props.children).toBe('Desktop')

    })
})
