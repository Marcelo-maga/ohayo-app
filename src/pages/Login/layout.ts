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
  flex-direction: row;
  justify-content: space-between;
`

export const LoginArea = styled.div`
  grid-area: LA;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 46px;
  }

  form{
    Input{

      margin: 0 0 5px 0;
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
