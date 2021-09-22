// Layout do app
import React from 'react'

import { Grid, Content } from './styles'
import SideBar from '../SideBar'
import Header from '../Header'

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header />
      <SideBar />
    </Grid>
  )
}

export default Layout
