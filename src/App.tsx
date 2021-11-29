import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext'
import { Layout } from './components/UiComponents/Layout'
import { Sidebar } from './components/UiComponents/Sidebar'
import { Routes } from './routes'

function App () {
  return (
    <AuthProvider>
      <ChakraProvider>
        <GlobalStyles />
        <Layout>
          <Sidebar />
          <Routes />
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App
