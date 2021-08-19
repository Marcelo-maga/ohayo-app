import React from 'react'
import Layout from './components/Layout'

import GlobalStyles from './styles/GlobalStyles'

import Routes from './Routes'

function App () {
  return (
    <>
      <Routes />

      <Layout />
      <GlobalStyles />
    </>
  )
}

export default App
