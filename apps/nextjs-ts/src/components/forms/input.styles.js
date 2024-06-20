import styled from "styled-components";

export const Input = styled.input`
background-color: transparent;
color: white;
border-style: solid;
border-radius: .25em;
padding: .5em;
min-width: 1em;
margin-right: 1em;

&:first-letter {
  text-transform: uppercase;
}

&.invalid {
  border-color: red;
  background-color: #f007;
  color: white;
}`