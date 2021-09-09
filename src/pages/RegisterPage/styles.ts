import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
`

export const RegisterArea = styled.div`
  align-self: center;

  h1{
    font-size: 46px;
    margin-bottom: 55px;
  }
  
  form{
    Input{
      margin: 0 0 15px 0;
      height: 45px;
    }
    Button{
      margin-right: 10px;
      width: 30%;
    }
  }
`
