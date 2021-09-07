import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import { ChakraProvider } from '@chakra-ui/react'

import Routes from './Routes'

function App () {
  return (
    <ChakraProvider>
      <Routes />
      <GlobalStyles />
    </ChakraProvider>
  )
}

export default App
