import React from 'react'
import { ButtonArea } from './styles'

export const Button: React.FC = ({ children }) => {
  return (
    <ButtonArea>
      { children }
    </ButtonArea>
  )
}
