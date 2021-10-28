import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  *, button, input {
    border: 0;
    outline: 0;
    
    font-family: 'Ubuntu', sans-serif;
  }

  li {
    list-style: none;
  }
  
`

export default GlobalStyles
