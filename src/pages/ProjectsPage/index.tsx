import { SmallAddIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Containar, ProjectsArea, Header } from './styles'
import Modal from '../../components/UiComponents/Modal/index'

export const ProjectsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  async function createNewProject () {
    setModalOpen(true)
    return (
      <Modal modalOpen={modalOpen}>
        <h1>Oi</h1>
      </Modal>
    )
  }

  return (
    <>
    <Modal modalOpen={modalOpen}>
      <h1>Oi</h1>
    </Modal>

    <Containar>
      <Header>
        <h1>Projetos</h1>
        <button className='btnAdd' onClick={createNewProject}><SmallAddIcon /></button>
      </Header>

      <ProjectsArea>

      </ProjectsArea>

    </Containar>
    </>
  )
}
