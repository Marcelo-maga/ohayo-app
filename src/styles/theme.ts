import { extendTheme } from '@chakra-ui/react'

const DefaultTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#082635'
      }
    }
  }
})

const colors = {
  primary: '#082635',
  secondary: '#001B27',
  tertiary: '#102D3C',

  white: '#f4f4f9',
  black: '#000000'

}

export { DefaultTheme, colors }
