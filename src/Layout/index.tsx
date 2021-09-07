// Layout do app
import React from 'react'

import { Grid } from './styles'
import Sidebar from '../components/Sidebar'
const Layout: React.FC = () => {
  return (
    <Grid>
      <Sidebar />
    </Grid>
  )
}

export default Layout
