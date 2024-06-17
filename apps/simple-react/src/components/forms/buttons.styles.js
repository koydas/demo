import styled from 'styled-components'

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    padding: .25em 1em;
    background-color: midnightblue;
    border-color: #101048;
    border-radius: .5em;
    color: white;
`

export const ButtonLight = styled.button`
    font-size: smaller;
    cursor: pointer;
    background: transparent;
    color: white;

    border: 0;
    &:hover {
        opacity: 0.7;
    }
`
