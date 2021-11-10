import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext'

import Routes from './Routes'
import Layout from './components/UiComponents/Layout/index'

function App () {
  return (
    <AuthProvider>
      <ChakraProvider>
        <GlobalStyles />
        <Layout>
          <Routes />
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App
