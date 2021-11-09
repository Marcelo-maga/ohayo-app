// Layout da dashbord
import React from 'react'

import SideBar from '../Sidebar'

import { Grid } from './styles'

const Layout: React.FC = (props) => {
  return (
    <Grid>
      <SideBar />
      {props.children}
    </Grid>
  )
}

export default Layout
