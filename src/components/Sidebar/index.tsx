import React, { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'
import { AddIcon, EditIcon, BellIcon } from '@chakra-ui/icons'

import { Container, Menu } from './styles'
import Modal from '../Modal'

const Sidebar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
    <Modal modalOpen={modalOpen} >
      <h1>New Project</h1>

      <form>
        <Input placeholder={'Project Name: '} name={'projectName'} size='md' />
        <Input placeholder={'Descrição: '} name={'projectDesc'} size='md' />
        <Button type='submit'>Criar</Button>
      </form>

        <h1>Or</h1>

      <h1>Era pra ser uma lista</h1>

    </Modal>

    <Container>
      <Menu>
        <button onClick={() => setModalOpen(true)} ><AddIcon/></button>
        <button><BellIcon/></button>
        <button><EditIcon/></button>
      </Menu>
    </Container>
    </>
  )
}

export default Sidebar
