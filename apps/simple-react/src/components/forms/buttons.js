import React from 'react'
import { Button as Styled, ButtonLight as StyledLight } from './buttons.styles.js'

export const Button = ({ onClick, children }) => <Styled onClick={onClick}>{children}</Styled>
export const ButtonLight = ({ onClick, children }) => <StyledLight onClick={onClick}>{children}</StyledLight>