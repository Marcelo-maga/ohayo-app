import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext'

import Routes from './Routes'

function App () {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Routes />
        <GlobalStyles />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App
