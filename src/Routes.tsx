import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import { AuthContext } from './context/AuthContext'

import { ProjectsPage } from './pages/ProjectsPage'
import { Sidebar } from './components/UiComponents/Sidebar'
import { ProjectPage } from './pages/ProjectPage'
import { VscRootFolderOpened } from 'react-icons/vsc'
const Routes = () => {
  const { authenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>

      <Sidebar>
        <Link to="/"><button><VscRootFolderOpened/></button></Link>
      </Sidebar>

      <Switch>
        <Route path="/login" component={LoginPage}>
          {authenticated ? <Redirect to='/' /> : null}
        </Route>

        <Route path="/register" component={RegisterPage}>
          {authenticated ? <Redirect to='/' /> : null}
        </Route>

        <Route exact path="/" component={ProjectsPage}>
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
