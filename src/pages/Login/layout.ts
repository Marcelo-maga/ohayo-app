import styled from 'styled-components'

// AT - Arte Area
// LA - Login Area
// HE - Header
// FO - Footer

export const Container = styled.div`
  display: grid;

  grid-template-areas: 
    'AT HE'
    'AT LA'
    'AT FO';

  height: 100%;
`

export const Header = styled.div`
  grid-area: HE;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  Button{
    font-size: 15px;
    background-color: white;
    margin: 5px 5px 5px 5px;
  }
`

export const LoginArea = styled.div`
  grid-area: LA;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 46px;
    margin-bottom: 20px;
  }
  
  form{
    Input{
      margin: 0 0 15px 0;
      height: 45px;
    }
    Button{
      width: 30%;
    }
  }

`

export const ArtArea = styled.div`
  grid-area: AT;
  display: flex;

  flex-direction: column;
  background-color: black;
`