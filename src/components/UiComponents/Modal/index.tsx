import React from 'react'

import { createPortal } from 'react-dom'
import { Container, Content } from './styles'

const modalRoot = document.getElementById('modal-root') as HTMLElement

interface ModalProps {
  openModal: boolean,
  onClickClose: () => void
}

const Modal: React.FC<ModalProps> = ({ openModal, onClickClose, children }) => {
  if (!openModal) return null

  return createPortal(
    <Container>
      <Content>
        <button className='btnClose' onClick={onClickClose}>X</button>
        {children}
      </Content>
    </Container>,
    modalRoot
  )
}

export { Modal }
