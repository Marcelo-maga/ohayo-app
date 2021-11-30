import React from 'react'

import { createPortal } from 'react-dom'
import { VscChromeClose } from 'react-icons/vsc'
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
        <button className='btnClose' onClick={onClickClose}><VscChromeClose/></button>
        {children}
      </Content>
    </Container>,
    modalRoot
  )
}

export { Modal }
