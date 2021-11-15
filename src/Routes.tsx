import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import { AuthContext } from './context/AuthContext'

import { Dashboard } from './pages/Dashboard'
import { ProjectsPage } from './pages/ProjectsPage'
import { Sidebar } from './components/UiComponents/Sidebar'
import { AddIcon, BellIcon, EditIcon } from '@chakra-ui/icons'
import { ProjectPage } from './pages/ProjectPage'
const Routes = () => {
  const { authenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>

      <Sidebar>
        <Link to="/projects"><button><AddIcon/></button></Link>
        <button><BellIcon/></button>
        <button><EditIcon/></button>
      </Sidebar>

      <Switch>
        <Route path="/login" component={LoginPage}>
          {authenticated ? <Redirect to='/' /> : null}
        </Route>

        <Route path="/register" component={RegisterPage}>
          {authenticated ? <Redirect to='/' /> : null}
        </Route>

        <Route exact path="/" component={Dashboard}>
          { !authenticated ? <Redirect to="/login" /> : null }
        </Route>

        <Route path="/projects" component={ProjectsPage}>
          { !authenticated ? <Redirect to="/login" /> : null }
        </Route>

        <Route path="/:projectId" component={ProjectPage}>
          { !authenticated ? <Redirect to="/login" /> : null }
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
