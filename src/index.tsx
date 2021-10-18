import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { DefaultTheme } from './styles/theme'
import { ColorModeScript } from '@chakra-ui/color-mode'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ColorModeScript initialColorMode={DefaultTheme.config.initialColorMode} />
  </React.StrictMode>,
  document.getElementById('root')
)
