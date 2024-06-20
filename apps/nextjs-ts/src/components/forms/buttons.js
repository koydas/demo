import React from 'react'
import { Button as Styled, ButtonLight as StyledLight } from './buttons.styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = ({ onClick, children }) => <Styled onClick={onClick}>{children}</Styled>
export const ButtonLight = ({ onClick, children, icon }) => <StyledLight onClick={onClick}>{icon ? <FontAwesomeIcon icon={icon} />: children}</StyledLight>