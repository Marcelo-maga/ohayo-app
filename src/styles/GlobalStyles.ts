import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    h1, h2, h3, strong, p {
      color: white;
    }
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
