import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Container = styled.div`
  grid-area: CO;

  display: flex;
  flex-direction: column;

  border-top-left-radius: 10px;

  margin-left: 55px;
  background-color: ${colors.secondary};
  
  .title {
    font-size: 30px;
    font-weight: bold;

    margin-top: 30px;
    margin-bottom: 10px;

    margin-left: 50px;
  }
`

export const Content = styled.div`
  display: grid;

  grid-template-areas: 
    'CO1 CO2';

  width: 100%;
  height: 100%;

  grid-template-columns: 70% 30%;

`

export const Content1 = styled.div`
  grid-area: CO1;

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;


`

export const Content2 = styled.div`
  grid-area: CO2;

  display: flex;

  width: 100%;
  height: 100%;

  flex-direction: column;
  align-items: center;

  h2{
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  h3 {
    font-weight: 500;
  }

`

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    border-style: solid;
    border-width: 2px;

    border-radius: 50%;

    width: 40px;
    height: 40px;

    margin-right: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }


`
