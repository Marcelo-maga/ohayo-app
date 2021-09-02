import styled from 'styled-components'

// LO - Login Form
// AT - Art area

export const Grid = styled.div`
  display: grid;

  grid-template-areas: 
    'AT HE'
    'AT LO'
    'AT FO';

`
export const Header = styled.div`
  grid-area: HE;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Login = styled.div`
  grid-area: LO;
  display: flex;

  flex-direction: column;
  align-items: center;

`

export const Footer = styled.div`
  grid-area: FO;
  display: flex;
  flex-direction: row;
`

export const ArtArea = styled.div`
  grid-area: AT;
`
