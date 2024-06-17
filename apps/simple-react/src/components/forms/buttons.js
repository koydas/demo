import React from 'react'
import { Button as Styled } from './buttons.styles.js'

export const Button = ({ onClick, children }) => <Styled onClick={onClick}>{children}</Styled>