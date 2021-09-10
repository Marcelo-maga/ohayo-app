import styled from 'styled-components'

export const Layout = styled.div`
  display: grid;
  grid-template-areas: 
    'LO';

  grid-template-columns: 50%;
  justify-content: center;

  height: 100vh;
`

export const RegisterArea = styled.div`
  grid-area: LO;
  align-self: center;

  h1{
    font-size: 46px;
    margin-bottom: 40px;
    font-weight: bold;
  }

  form{
    Input{
      margin: 0 0 5px 0;
      height: 45px;
    }
    Button{
    margin-right: 10px;
    width: 30%;
    }
    p{
      margin: 0 0 15px 0;
    }
  }
`
