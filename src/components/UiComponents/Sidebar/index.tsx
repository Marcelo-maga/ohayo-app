import React, { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'
import { AddIcon, EditIcon, BellIcon } from '@chakra-ui/icons'

import { Container, Menu } from './styles'
import Modal from '../Modal'

const Sidebar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  async function createProject (event: Event) {
    event.preventDefault()
    console.log('Cheguei')
  }

  return (
    <>
    <Modal modalOpen={modalOpen} >
      <h1>New Project</h1>

      <form onSubmit={() => console.log('dadss')}>
        <Input placeholder={'Project Name: '} name={'projectName'} size='md' />
        <Input placeholder={'Descrição: '} name={'projectDesc'} size='md' />
        <Button onClick={() => createProject}>Criar</Button>
        <Button type='reset'>Cancel</Button>
      </form>

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
