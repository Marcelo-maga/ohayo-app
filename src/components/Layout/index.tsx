// Layout da dashbord
import React from 'react'

import SideBar from '../Sidebar'
import Header from '../Header'

import { Grid } from './styles'

const Layout: React.FC = (props) => {
  return (
    <Grid>
      <Header />
      <SideBar />
      {props.children}
    </Grid>
  )
}

export default Layout
