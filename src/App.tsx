import React from 'react'
import Layout from './Layout'

import GlobalStyles from './styles/GlobalStyles'
import { ChakraProvider } from '@chakra-ui/react'

import Routes from './Routes'

function App () {
  return (
    <ChakraProvider>
      <Routes />

      <Layout />
      <GlobalStyles />
    </ChakraProvider>
  )
}

export default App
