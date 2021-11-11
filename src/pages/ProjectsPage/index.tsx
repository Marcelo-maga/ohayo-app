import React, { useState } from 'react'

import { SmallAddIcon } from '@chakra-ui/icons'
import { ProjectList } from '../../components/ProjectList'
import { Modal } from '../../components/UiComponents/Modal'
import { Containar, Header } from './styles'
import { CreateNewProject } from '../../components/CreateNewProject'
import { Layout } from '../../components/UiComponents/Layout'

export const ProjectsPage: React.FC = () => {
  const [openModal, setModalOpen] = useState(false)

  return (
    <Layout>
      <Containar>
        <Header>
          <h1>Projetos</h1>
          <button onClick={() => setModalOpen(true)} className='btnAdd'>
            <SmallAddIcon />
          </button>
        </Header>

        <Modal openModal={openModal} onClickClose={() => setModalOpen(false)}>
          <CreateNewProject />
        </Modal>

        <ProjectList />
      </Containar>
    </Layout>
  )
}
