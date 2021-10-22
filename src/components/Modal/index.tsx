import React from 'react'
import { createPortal } from 'react-dom'

import { Container, Content } from './styles'
interface props {
  modalOpen: boolean
}

const modalRoot = document.getElementById('modal-root') as HTMLElement

const Modal: React.FC<props> = ({ modalOpen, children }) => {
  if (!modalOpen) return null

  return createPortal(
    <Container>
      <Content>{children}</Content>
    </Container>,
    modalRoot
  )
}

export default Modal
