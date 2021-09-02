import styled from 'styled-components'

// LO - Login Form
// AT - Art area

export const Grid = styled.div`
  display: grid;

  grid-template-areas: 
    'AT LO'
    'AT LO';

  height: 100vh;
`

export const Login = styled.div`
  grid-area: LO;
  display: flex;

  flex-direction: column;
  align-items: center;

`

export const Art = styled.div`
  grid-area: AT;
`
